import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRating } from '../store';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';

const ShowRatingsForRestaurant = ({ restaurantId }) => {
    const {
        ratings,
        auth: { auth },
    } = useSelector((state) => state);

    const dispatch = useDispatch();

    const ratingsForRestaurant =
        ratings?.filter(
            (rating) => rating.restaurantId * 1 === restaurantId * 1
        ) || [];

    return (
        <Card style={{ width: '50%' }}>
            <Card.Header>
                {ratingsForRestaurant.length || 'No'} Reviews
            </Card.Header>
            <ListGroup className="list-group-flush">
                {ratingsForRestaurant?.map((rating) => (
                    <ListGroup.Item key={rating.id}>
                        <Card.Title>
                            {rating.user?.username || 'Unknown'}
                            {auth?.id === rating.userId && (
                                <CloseButton
                                    onClick={() => {
                                        dispatch(deleteRating(rating));
                                    }}
                                />
                            )}
                        </Card.Title>
                        <Card.Text>Score: {rating.score} out of 5</Card.Text>
                        {rating.preference && (
                            <Card.Text>
                                Standout Feature: {rating.preference?.name}
                            </Card.Text>
                        )}
                        <hr />
                        <Card.Text>{rating.comment}</Card.Text>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

export default ShowRatingsForRestaurant;
