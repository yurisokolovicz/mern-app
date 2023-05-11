import React from 'react';

import Card from '../../shared/UIElements/Card';
import './PlaceItem.css';

const PlaceItem = placeList => {
    return (
        <li className="place-item">
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={placeList.image} alt={placeList.title} />
                </div>
                <div className="place-item__info">
                    <h2>{placeList.title}</h2>
                    <h3>{placeList.address}</h3>
                    <p>{placeList.description}</p>
                </div>
                <div className="place-item__actions">
                    <button>VIEW ON MAP</button>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
            </Card>
        </li>
    );
};
export default PlaceItem;
