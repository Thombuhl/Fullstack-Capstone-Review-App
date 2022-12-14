import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { scoreWeighted, regularScore, bestFeature } from '../scoreFunctions';

import CreateRatingForm from '../components/CreateRatingForm';
import ShowRatingsForRestaurant from '../components/ShowRatingsForRestaurant';
import { fetchUserPreferences, fetchPreferences } from '../store/preference';

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
        preferences: { userPref },
    } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchUserPreferences());
        };
        fetchData();
    }, []);

    const restaurant =
        restaurants?.find((restaurant) => restaurantId * 1 === restaurant.id) ||
        {};

    const ratingsForRestaurant =
        ratings?.filter(
            (rating) => rating.restaurantId * 1 === restaurantId * 1
        ) || [];

    //Restaurant Score, Weighted Score, Strongest Feature
    const regScore = regularScore(ratingsForRestaurant);
    const weighScore = scoreWeighted(userPref, ratingsForRestaurant);
    const favPref = bestFeature(ratingsForRestaurant);

    return (
    
        <div className="one-restaurant container">
           <Button className="backbutton" variant="outline-light" href="/home/1"> Go Back</Button>
            <div className="row py-3">
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
            </div>
            <div className="row">
                <CreateRatingForm restaurantId={restaurantId} />
            </div>
            <div className="row">
                <ShowRatingsForRestaurant restaurantId={restaurantId} />
            </div>

        </div>
    );
};

export default Restaurant;
