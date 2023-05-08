import React from 'react';

import UsersItem from './UsersItem';
import './UsersList.css';

const UsersList = Uprops => {
    if (Uprops.items.length === 0) {
        return (
            <div className="center">
                <h2>No users found.</h2>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {Uprops.items.map(user => (
                <UsersItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
            ))}
        </ul>
    );
};
export default UsersList;

// Uprops = Users props
