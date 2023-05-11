import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://www.esbnyc.com/sites/default/files/styles/small_feature/public/2022-06/iStock-937427130%20%281%29.jpg?itok=osCyvhw5.jpg',
        address: '20 W 34th St., New York, NY 10001',
        location: { lat: 40.7484405, lng: -73.9878531 },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://www.esbnyc.com/sites/default/files/styles/small_feature/public/2022-06/iStock-937427130%20%281%29.jpg?itok=osCyvhw5.jpg',
        address: '20 W 34th St., New York, NY 10001',
        location: { lat: 40.7484405, lng: -73.9878531 },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />;
};
export default UserPlaces;
