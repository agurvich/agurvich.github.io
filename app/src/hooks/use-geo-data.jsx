import { useContext } from 'react';
import { GeoContext } from '@src/contexts/geo-context';

function useGeoData(){
    /* Load geographic data from context */
    const {
        focus,
        allStatesGeography,
        allCountyGeographyRef
    } = useContext(GeoContext);

    /* Compute the geographic data for the current state */
    const thisStateData = focus.state.GEOID 
        ? allStatesGeography.features.find(feature => feature.properties.geoid === focus.state.GEOID)
        : {};

    /* Compute the geographic data for the current county */
    const thisCountyData = focus.county.GEOID && allCountyGeographyRef.current[focus.state.GEOID]
        ? allCountyGeographyRef.current[focus.state.GEOID].features.find(feature => feature.properties.geoid === focus.county.GEOID)
        : {};

    return { thisStateData, thisCountyData };
};

export default useGeoData;
