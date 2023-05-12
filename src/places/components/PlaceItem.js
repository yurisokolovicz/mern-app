import React, { useState } from 'react';

import Card from '../../shared/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import './PlaceItem.css';

const PlaceItem = placeList => {
    const [showMap, setShowMap] = useState(false); // This is a state that will be used to show the map when the user clicks on the VIEW ON MAP button. It is false by default because we dont want to show the modal when the user acess the page.

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={placeList.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <Map center={placeList.coordinates} zoom={16} />
                </div>
            </Modal>
            {/* onCancel come from the Modal component, it is a prop that we can use to close the modal when the user clicks on the backdrop. */}
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
                        <Button inverse onClick={openMapHandler}>
                            VIEW ON MAP
                        </Button>
                        <Button to={`/places/${placeList.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};
export default PlaceItem;

// <Button inverse> the inverse prop, check the Button component to see how it is used (also the css of Button component).

// Portal allow us to use a component in a certain place, in this case in the PlaceItem and render the content of that component in a different place, in this case in the index.html file. This is useful because we can use the Modal component in the PlaceItem component and render it in the index.html file. This way we can use the Modal component in any place of our application. This semantically might be better than attaching the modal markup next to the list item, we might be able to achieve a better structure this way.

// PlaceItem.js send props to Modal.js. The Modal.js receive the props and use it.
