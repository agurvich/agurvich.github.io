import alasql from 'alasql';

export function getVoterData(database,tableName,aggregate=false,sourceTableName="voter_data"){

    const executeSql = (sql, params = []) => {
        try {
            if (!database) return null;
            const stmt = database.prepare(sql, params);
            const results = [];
            while (stmt.step()) {
                results.push(stmt.getAsObject());
            }
            stmt.free();
            return results;
        } catch (error) {
            console.error(`Failed to execute ${sql} for ${database}`, error);
            debugger
            return null;
        }
    };

    if (database){
        // examine the table to get the schema

        if (!checkTableExists(executeSql,sourceTableName)){
            throw new Error(`${sourceTableName} doesn't exist in ${database}.`);
        }
        let result = executeSql(`PRAGMA table_info(${sourceTableName})`);

        // determine which columns represent voter categories
        let cols = result.filter( col => {
            const keep = (
                col.name.startsWith('voters_') || 
                col.name.includes('party')
            );
            //if (!keep) console.log('ignoring column:',col)
            return keep;
        });


        // these are the base column names (prefixed with voters_)
        cols = cols.map(col => col.name);

        const allCols = cols.reduce( (acc,col) => {
            if (col.includes('voters_') && !col.includes('gender_')){
                return [
                    col,
                    col.replace('voters_',''),
                    col.replace('voters_','gender_f_'),
                    col.replace('voters_','gender_m_'),
                    ...acc
                ]
            }
            else return [col, ...acc];
        },[]);

        var query = `
            SELECT
                GEOID,
                ${allCols.join(',\n')}
            FROM ${sourceTableName};
        `;

        // execute the query
        result = executeSql(query);

        if (aggregate){
            query = `
            SELECT
                ${allCols.map(col => `SUM(${col}) AS ${col}`).join(',\n')}
            FROM ${sourceTableName}`
            result.push({GEOID:0,...executeSql(query)[0]});
        }

        const voterData = {};
        // missing 11: DC, 02: AK, and 72: PR. but that's to be expected
        //  based on data availability and cleaning issues
        if (!tableName) {
            result.forEach(row => voterData[row.GEOID] = row);
        }
        else {
            // Create an in-memory table with AlaSQL
            alasql(`CREATE TABLE IF NOT EXISTS ${tableName} (
                GEOID INTEGER,
                name STRING,
                ${allCols.map( col => `${col} INTEGER`).join(',\n')}
            )`);

            // fill the table with our newly retrieved values
            alasql(`INSERT INTO ${tableName} SELECT * FROM ?`, [result]);
            console.log(`${tableName} updated with ${result.length} rows.`)

            /*
            let counts = {};
            result.forEach(item => {
                counts[item.GEOID] = (counts[item.GEOID] || 0) + 1;
            });
            const duplicates = Object.entries(counts).filter( ([key,value]) => value > 1);
            if (duplicates.length > 0){
                const badKeys = duplicates.map( value => parseInt(value[0]));
                const repeatRows = result.filter( val => badKeys.includes(val.GEOID))
                console.log(duplicates)
                debugger
            }
            */
            
            // return a simple object with only the GEOID of the rows now in AlaSQL
            //  save a bool just for checking
            result.forEach( row => voterData[row.GEOID] = {
                alasql:true
            } );
            //result.forEach(row => voterData[row.GEOID] = row);
        }

        return voterData;
    }
}

export function setScaledVoterGenderAge(
    ageGroups, 
    gender, 
    sourceTableName='county_level_voter_data',
    executeSql=null){

    // default to in-memory AlaSql database
    if (!executeSql) executeSql = alasql;

    /* this query should be executed only after all the data has been loaded 
    and every time the county-level database version is incremented */

    const viewName = `${gender}_${sourceTableName}_InitialEstimates`;
    const outputCols = ageGroups.map( age => `voters_${gender}_${age}`);
    const outputTotalCols = outputCols.map( col => `${col}_total`);

    /*
    const initialState = executeSql(`SELECT * FROM ${sourceTableName}`);
    console.log('initial state is:',initialState)
    */

    /* should only need to be run once */
    if (!checkTableExists(executeSql,viewName,'view')){
        const selectParts = ageGroups.map( (age,i) => {
            return `(${gender}_${age} / CAST(${age} AS FLOAT)) * voters_${age} AS ${outputCols[i]}`;
        }).join(',\n');

        // create view that will make initial estimate assuming
        //  turnout is evenly distributed amongst age groups
        const createViewQuery =  `
        CREATE VIEW ${viewName} AS
        SELECT
            GEOID,
            ${selectParts},
            voters_${gender}
        FROM ${sourceTableName}
        WHERE GEOID != 0;`;
        executeSql(createViewQuery);

        // add new columns to source table
        const alterTableQuery = `
        ${outputCols.map(col => `ALTER TABLE ${sourceTableName} ADD COLUMN ${col} INT;`).join('\n')}
        `
        executeSql(alterTableQuery);
    }
 
    // create three temporary tables, two for intermediate steps and the
    //  the last is the final table that will be swapped into the original's
    //  position. 
    const tablesQuery = `
    DROP TABLE IF EXISTS CacheTable;
    DROP TABLE IF EXISTS ResultsTable;
    DROP TABLE IF EXISTS FinalTable;

    CREATE TABLE CacheTable;
    CREATE TABLE ResultsTable;
    CREATE TABLE FinalTable (
        ${alasql.databases.alasql.tables[sourceTableName].columns.map(
            col => `${col.columnid} ${col.dbtypeid}`).join(',\n')
        }
    );

    INSERT INTO CacheTable
    SELECT
        *
    FROM ${viewName};
    `;
    let results = executeSql(tablesQuery);

    // rescale the original estimate by making sure the integral
    //  over the age groups adds up to what we know it has to (provided constraint). 
    const resultsQuery = `
    WITH TotalsTable AS(
        SELECT
        ${outputCols.map( (col,i) => `SUM(${col}) AS ${outputTotalCols[i]}`).join(',\n')},
        SUM(voters_${gender}) AS voters_${gender}_total -- the true age-aggregated voter data we calibrate against
        FROM CacheTable
    ), ScaleFactor AS (
        SELECT
            voters_${gender}_total / (${outputTotalCols.join('+')}) AS scale_factor
        FROM TotalsTable
    )
    SELECT
        CacheTable.GEOID,
        ${outputCols.map(col => `ROUND(CacheTable.${col} * sf.scale_factor) AS ${col}`).join(',\n')}
    FROM ScaleFactor AS sf, CacheTable
    UNION ALL
    SELECT
        0 AS GEOID,
        ${outputCols.map(col => `ROUND(totals.${col}_total * sf.scale_factor) AS ${col}`).join(',\n')}
    FROM ScaleFactor AS sf, TotalsTable AS totals;
    `;
    results = executeSql(resultsQuery);

    // put UNION'd results into a table because
    //  I can't figure out how to insert any way
    //  other than this...
    alasql(` SELECT * INTO ResultsTable FROM ?  `, [results]);

    // join results and original source data into a new "final" table
    const joinQuery = `
        SELECT rt.*, st.* 
        INTO FinalTable 
        FROM  ${sourceTableName} AS st
        JOIN ResultsTable AS rt USING GEOID;

        SELECT * FROM FinalTable;
    `;
    results = executeSql(joinQuery);

    // drop the original and intermediate tables,
    //  then replace the original with the new joined table
    const dropQuery = `
    DROP TABLE ${sourceTableName};
    DROP TABLE ResultsTable;
    DROP TABLE CacheTable;
    ALTER TABLE FinalTable RENAME TO ${sourceTableName};
    `;
    executeSql(dropQuery);

    console.log(
        `modified ${results[0]} rows in ${sourceTableName} (add voters estimate for ${gender})`
    );

    /*
    const finalState = executeSql(`SELECT * FROM ${sourceTableName}`);
    console.log('final state is:',finalState);
    */

    return results;
}

/*
function checkTableExists(executeSql,tableName,type='table'){
    const existsQuery = `SELECT name FROM sqlite_master WHERE type='${type}' AND name='${tableName}'`;
    const result = executeSql(existsQuery)
    debugger
    return result.length === 1;
}
*/

function checkTableExists(executeSql, tableName) {
    try {
        // Try to execute a select statement on the table
        executeSql(`SELECT * FROM ${tableName} WHERE 1=0`); // WHERE 1=0 ensures no rows are actually processed
        return true; // No error means the table exists
    } catch (error) {
        // Catch the error - if the table does not exist, an error will be thrown
        return false;
    }
}