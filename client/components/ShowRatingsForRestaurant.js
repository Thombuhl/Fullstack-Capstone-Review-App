import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { createRating } from '../store';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ShowRatingsForRestaurant = ({ restaurantId }) => {
    const {
        ratings,
        auth: { auth },
        restaurants: { restaurants },
    } = useSelector((state) => state);

    const ratingsForRestaurant =
        ratings?.filter(
            (rating) => rating.restaurantId * 1 === restaurantId * 1
        ) || [];

    return (
        <ul>
            {ratingsForRestaurant?.map((rating) => (
                <li key={rating.id}>
                    {rating.user?.username || 'Unknown'}
                    {rating.score}
                    {rating.comment}
                    {auth?.id === rating.userId && (
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
    );
};

export default ShowRatingsForRestaurant;
