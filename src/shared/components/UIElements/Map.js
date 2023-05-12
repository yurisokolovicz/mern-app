import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = props => {
    const mapRef = useRef();
    // Object destructuring - put elements out of the props object AND STORE THEM IN VARIABLES.
    const { center, zoom } = props;

    useEffect(() => {
        new window.ol.Map({
            target: mapRef.current.id,
            layers: [
                new window.ol.layer.Tile({
                    source: new window.ol.source.OSM()
                })
            ],
            view: new window.ol.View({
                center: window.ol.proj.fromLonLat([center.lng, center.lat]),
                zoom: zoom
            })
        });
    }, [center, zoom]);

    return <div ref={mapRef} className={`map ${props.className}`} style={props.style} id="map"></div>;
};

export default Map;

// Map.js recebe props de Map.css
// Map.js e utilizado em PlaceItem.js e la recebe props do placeList como props.
