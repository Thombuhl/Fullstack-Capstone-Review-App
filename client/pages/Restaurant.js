import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/OneRestaurant.css';
import { Link } from 'react-router-dom';
import CreateRatingForm from '../components/CreateRatingForm';
import { deleteRating } from '../store';

/**
 * COMPONENT
 */
const Restaurant = (props) => {
    const { ratings, auth } = useSelector((state) => state);
    const { restaurants } = useSelector((state) => state.restaurants);
    const dispatch = useDispatch();

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
            <img className="img-thumbnail" src={restaurant.imgUrl} />
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
            <p>{restaurant.fullAddress}</p>
            <ul>
                {ratingsForRestaurant?.map((rating) => (
                    <li key={rating.id}>
                        {rating.user?.username || 'Unknown'}
                        {rating.score}
                        {rating.comment}
                        {auth.auth?.id === rating.userId && (
                            <button
                                onClick={() => {
                                    dispatch(deleteRating(rating));
                                }}
                            >
                                x
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            <CreateRatingForm restaurantId={restaurantId} />
        </div>
    );
};

export default Restaurant;
