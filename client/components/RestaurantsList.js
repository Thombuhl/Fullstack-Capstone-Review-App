import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import RestaurantItem from './RestaurantItem';

import '../styles/RestaurantsList.css';

const RestaurantsList = () => {
    const { restaurants } = useSelector((state) => state);

    const [filter, setFilter] = useState({});

    const handleFilters = (event) => {
        const value = event.target.value;
        setFilter({
            ...filter,
            [event.target.name]: value,
        });
    };

    const deliveryMap = restaurants
        .filter(
            (restaurant) =>
                !filter.hasDelivery ||
                restaurant.hasDelivery === filter.hasDelivery
        )
        .reduce((acc, restaurant) => {
            const hasDelivery = restaurant.hasDelivery;
            acc[hasDelivery] = acc[hasDelivery] || {
                id: restaurant.id,
                hasDelivery,
                count: 0,
            };
            acc[key].count++;
            return acc;
        }, {});

    return (
        <>
            <div className="RestaurantsList">
                {restaurants.map((res) => (
                    <RestaurantItem restaurant={res} key={res.id} />
                ))}
            </div>
            <select name="hasDelivery" onChange={handleFilters}>
                <option>Delivery</option>
                {deliveryMap.map((item) => {
                    return <option key={item.id}>{item.hasDelivery}</option>;
                })}
            </select>
        </>
    );
};

export default RestaurantsList;
