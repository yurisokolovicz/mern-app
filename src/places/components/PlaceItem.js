import React from 'react';

import Card from '../../shared/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
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
                    <Button inverse>VIEW ON MAP</Button>
                    <Button to={`/places/${placeList.id}`}>EDIT</Button>
                    <Button danger>DELETE</Button>
                </div>
            </Card>
        </li>
    );
};
export default PlaceItem;

// <Button inverse> the inverse prop, check the Button component to see how it is used (also the css of Button component).
