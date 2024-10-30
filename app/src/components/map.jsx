// Map.jsx
import { MapContainer, TileLayer, GeoJSON, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import places from '../data/places.json';
import { BsGeoAltFill } from 'react-icons/bs';
import ReactDOMServer from 'react-dom/server';

// Create custom Leaflet icon with react-icons
const createCustomIcon = (active) =>
    L.divIcon({
        html: `
            ${ReactDOMServer.renderToString(
                <BsGeoAltFill className={`
                    ${active ? 'text-red-500' : 'text-blue-500'}
                    text-[24px]
                `} />
            )}
        `,
        className: '', // Clear default styles
        iconSize: [24, 24],
        iconAnchor: [12, 24], // Adjust anchor point to center the icon
    });

const pointToLayer = (feature, latlng) => {
    // Create and return the custom icon marker directly
    const icon = createCustomIcon(feature.properties.active);
    return L.marker(latlng, { icon });
};

const onEachFeature = (feature, layer) => {
    // Optionally bind a popup
    if (feature.properties && feature.properties.name && feature.properties.description) {
        layer.bindPopup(
            `<b>${feature.properties.name}</b><br>${feature.properties.description}`
        );
    }
};

const Map = () => {
    let mapCenter = [0, 0]; // Center map on the approximate geographic center of the US
    let count = 0

    places.features.forEach( place => {
        mapCenter[0] += place.geometry.coordinates[0];
        mapCenter[1] += place.geometry.coordinates[1];
        count++;
    })

    mapCenter = [mapCenter[1]/count,mapCenter[0]/count-4];

    return (
        <MapContainer
            center={mapCenter}
            zoom={4}
            dragging={false}
            doubleClickZoom={false}
            zoomControl={false} 
            scrollWheelZoom={false}
            style={{ height: '300px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON
                {...{data:places, pointToLayer,onEachFeature}}
            />
        </MapContainer>
    );
};

export default Map;