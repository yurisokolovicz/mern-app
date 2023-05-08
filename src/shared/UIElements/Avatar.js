import React from 'react';

import './Avatar.css';

const Avatar = usersitemprops => {
    return (
        <div className={`avatar ${usersitemprops.className}`} style={usersitemprops.style}>
            <img
                src={usersitemprops.image}
                alt={usersitemprops.alt}
                style={{ width: usersitemprops.width, height: usersitemprops.width }}
            />
        </div>
    );
};

export default Avatar;
