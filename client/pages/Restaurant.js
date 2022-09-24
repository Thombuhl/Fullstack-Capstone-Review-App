import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { fetchRatings, fetchRestaurants } from '../store';

/**
 * COMPONENT
 */
const Restaurant = (props) => {
    const allRatings = useSelector((state) => state.ratings);
    const restaurantId = props.match.params.id || {};
    console.log(props);
    const dispatch = useDispatch();

    const [restaurants, setRestaurants] = useState([]);
    const [ratings, setRatings] = useState(allRatings);

    useEffect(() => {
        const fetchData = async () => {
            const restaurants = (await dispatch(fetchRestaurants())).payload;
            setRestaurants(restaurants);
            const ratings = (await dispatch(fetchRatings())).payload;
            setRatings(ratings);
        };
        fetchData();
    }, []);
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
