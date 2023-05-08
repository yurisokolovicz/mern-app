import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/UIElements/Avatar';
import Card from '../../shared/UIElements/Card';
import './UsersItem.css';

const UsersItem = ULprops => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${ULprops.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={ULprops.image} alt={ULprops.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{ULprops.name}</h2>
                        <h3>
                            {ULprops.placeCount} {ULprops.placeCount === 1 ? 'Place' : 'Places'}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};
export default UsersItem;

// ULprops = UsersList props
