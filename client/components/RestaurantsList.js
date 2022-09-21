import React from 'react';
import { useSelector } from 'react-redux';

import RestaurantItem from './RestaurantItem';

import '../styles/RestaurantsList.css';

const RestaurantsList = () => {
    const { restaurants } = useSelector((state) => state);
    return (
        <div className="RestaurantsList">
            {restaurants.map((res) => (
                <RestaurantItem restaurant={res} key={res.id} />
            ))}
        </div>
    );
};

export default RestaurantsList;
