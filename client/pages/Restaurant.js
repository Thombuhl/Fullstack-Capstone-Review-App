import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/OneRestaurant.css';
import { Link } from 'react-router-dom';
import CreateRatingForm from '../components/CreateRatingForm';
import { deleteRating } from '../store';
import ShowRatingsForRestaurant from '../components/ShowRatingsForRestaurant';

/**
 * COMPONENT
 */
const Restaurant = (props) => {
    const {
        restaurants: { restaurants },
    } = useSelector((state) => state);
    const restaurantId = props.match.params.id || '';

    const restaurant =
        restaurants?.find((restaurant) => restaurantId * 1 === restaurant.id) ||
        {};

    return (
        <div className="one-restaurant container">
            <Link to="/home">Go Back</Link>
            <img
                style={{ height: '100px', width: '100px' }}
                className="img-thumbnail"
                src={restaurant.imgUrl}
            />
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
            <p>{restaurant.fullAddress}</p>
            <ShowRatingsForRestaurant restaurantId={restaurantId} />
            <CreateRatingForm restaurantId={restaurantId} />
        </div>
    );
};

export default Restaurant;
