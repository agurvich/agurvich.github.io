import { useContext } from 'react';
import { ModelContext } from '@src/contexts/model-context';
import useGeoData from './use-geo-data';

function useVoterData(){
    const { thisStateData, thisCountyData } = useGeoData();

    /* load voter age-turnout data */
    const { statesModelData, countiesModelData } = useContext(ModelContext);
    
    return {
        voterData: statesModelData && statesModelData[0],
        parentVoterData: null,
        globalVoterData: null
    }
};

export default useVoterData;
