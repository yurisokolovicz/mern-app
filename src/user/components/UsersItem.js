import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/UIElements/Avatar';
import Card from '../../shared/UIElements/Card';
import './UsersItem.css';

const UsersItem = userslistprops => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${userslistprops.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={userslistprops.image} alt={userslistprops.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{userslistprops.name}</h2>
                        <h3>
                            {userslistprops.placeCount} {userslistprops.placeCount === 1 ? 'Place' : 'Places'}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};
export default UsersItem;
