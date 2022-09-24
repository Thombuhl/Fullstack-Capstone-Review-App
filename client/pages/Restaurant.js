import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/OneRestaurant.css';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
const Restaurant = (props) => {
    const { restaurants, ratings } = useSelector((state) => state);
    const restaurantId = props.match.params.id;

    console.log(restaurants);
    const restaurant =
        restaurants.find((restaurant) => restaurantId * 1 === restaurant.id) ||
        {};
    return (
        <div className="one-restaurant">
            <Link to="/home">Go Back</Link>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
            <p>{restaurant.fullAddress}</p>
            <ul>
                {restaurant.ratings?.map((rating) => (
                    <li key={rating.id}>{rating.comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default Restaurant;
