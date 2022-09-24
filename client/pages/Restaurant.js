import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/OneRestaurant.css';
import { Link } from 'react-router-dom';
import CreateRatingForm from '../components/CreateRatingForm';

/**
 * COMPONENT
 */
const Restaurant = (props) => {
    const { ratings } = useSelector((state) => state);
    const { restaurants } = useSelector((state) => state);
    const restaurantId = props.match.params.id || {};

    const restaurant =
        restaurants?.find((restaurant) => restaurantId * 1 === restaurant.id) ||
        {};
    const ratingsForRestaurant =
        ratings?.filter(
            (rating) => rating.restaurantId * 1 === restaurant.id
        ) || [];
    return (
        <div className="one-restaurant container">
            <Link to="/home">Go Back</Link>
            {/* <img className="img-thumbnail" src={restaurant.imgUrl} /> */}
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
            <p>{restaurant.fullAddress}</p>
            <ul>
                {ratingsForRestaurant?.map((rating) => (
                    <li key={rating.id}>
                        {rating.user?.username || 'Unknown'}
                        {rating.score}
                        {rating.comment}
                    </li>
                ))}
            </ul>
            <CreateRatingForm restaurantId={restaurantId} />
        </div>
    );
};

export default Restaurant;
