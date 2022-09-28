import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import '../styles/OneRestaurant.css';
import { Link } from 'react-router-dom';
import CreateRatingForm from '../components/CreateRatingForm';
import ShowRatingsForRestaurant from '../components/ShowRatingsForRestaurant';
import Card from 'react-bootstrap/Card';

/**
 * COMPONENT
 */
const Restaurant = (props) => {
    const {
        ratings,
        restaurants: { restaurants },
    } = useSelector((state) => state);
    const restaurantId = props.match.params.id || '';

    const restaurant =
        restaurants?.find((restaurant) => restaurantId * 1 === restaurant.id) ||
        {};

    let addRestaurantScore = 0;
    const ratingsForRestaurant =
        ratings?.filter(
            (rating) => rating.restaurantId * 1 === restaurantId * 1
        ) || [];

    ratingsForRestaurant.forEach((rating) => {
        addRestaurantScore += rating.score * 1;
    });

    const restaurantScore = addRestaurantScore / ratingsForRestaurant.length;
    console.log(restaurantScore);

    return (
        <div className="one-restaurant container">
            <Card className="bg-dark text-white">
                <Card.Img
                    src={restaurant.imgUrl}
                    style={{
                        // maxHeight: '500px',
                        height: '350px',
                        objectFit: 'none',
                        filter: 'brightness(50%)',
                    }}
                    alt="Card image"
                />
                <Card.ImgOverlay>
                    <Card.Header>
                        <Link to="/home/1">Go Back</Link>
                    </Card.Header>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Title>
                        Standard Score: {parseFloat(restaurantScore).toFixed(2)}{' '}
                        out of 5
                    </Card.Title>
                    <Card.Text>{restaurant.description}</Card.Text>
                    <Card.Text>{restaurant.fullAddress}</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <ShowRatingsForRestaurant restaurantId={restaurantId} />
            <CreateRatingForm restaurantId={restaurantId} />
        </div>
    );
};

export default Restaurant;
