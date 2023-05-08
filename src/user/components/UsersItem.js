import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/UIElements/Avatar';
import Card from '../../shared/UIElements/Card';
import './UsersItem.css';

const UsersItem = userslist => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${userslist.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={userslist.image} alt={userslist.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{userslist.name}</h2>
                        <h3>
                            {userslist.placeCount} {userslist.placeCount === 1 ? 'Place' : 'Places'}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};
export default UsersItem;

// userslist = props
