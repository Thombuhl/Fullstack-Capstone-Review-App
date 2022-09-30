import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { scoreWeighted, regularScore, bestFeature } from '../scoreFunctions';

import CreateRatingForm from '../components/CreateRatingForm';
import ShowRatingsForRestaurant from '../components/ShowRatingsForRestaurant';
import { fetchPrefLabel, setPreferenceLabel } from '../store/preference';

import Card from 'react-bootstrap/Card';

/**
 * COMPONENT
 */
const Restaurant = (props) => {
    const restaurantId = props.match.params.id || '';
    const {
        auth: { auth },
        ratings,
        restaurants: { restaurants },
    } = useSelector((state) => state);
    console.log(useSelector((state) => state));

    const userPreferences = auth?.userpreferences;

    const restaurant =
        restaurants?.find((restaurant) => restaurantId * 1 === restaurant.id) ||
        {};

    const ratingsForRestaurant =
        ratings?.filter(
            (rating) => rating.restaurantId * 1 === restaurantId * 1
        ) || [];

    //Restaurant Score, Weighted Score, Strongest Feature
    const regScore = regularScore(ratingsForRestaurant);
    const weighScore = scoreWeighted(userPreferences, ratingsForRestaurant);
    const favPref = bestFeature(ratingsForRestaurant);

    return (
        <div className="one-restaurant container">
            <Card className="bg-dark text-white">
                <Card.Img
                    src={restaurant.imgUrl}
                    style={{
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
                    {regScore && (
                        <Card.Title>
                            Standard Score: {regScore} out of 5
                        </Card.Title>
                    )}
                    {weighScore && (
                        <Card.Title>Preference Score: {weighScore}%</Card.Title>
                    )}
                    {favPref?.preference && (
                        <Card.Text>
                            Top Feature: {favPref?.preference}
                        </Card.Text>
                    )}
                    <Card.Text>{restaurant.description}</Card.Text>
                    <Card.Text>{restaurant.fullAddress}</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <CreateRatingForm restaurantId={restaurantId} />
            <ShowRatingsForRestaurant restaurantId={restaurantId} />
        </div>
    );
};

export default Restaurant;
