import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import RestaurantsList from '../components/RestaurantsList';
import '../styles/OneRestaurant.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import {
    SingleRestContainer,
    // SingleRestContainer,
    // SliderValueText,
} from '../styledComponents/SingleRestaurant';
import CreateRatingForm from '../components/CreateRatingForm';

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
        <div className="one-restaurant container">
            <Link to="/home">Go Back</Link>
            {/* <img className="img-thumbnail" src={restaurant.imgUrl} /> */}
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
            <p>{restaurant.fullAddress}</p>
            <ul>
                {restaurant.ratings?.map((rating) => (
                    <li key={rating.id}>{rating.comment}</li>
                ))}
            </ul>
            <CreateRatingForm />
        </div>
    );
};

export default Restaurant;
