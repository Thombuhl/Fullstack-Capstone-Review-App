import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/RestaurantItem.css';
import { Link } from 'react-router-dom';
import { fetchResReviews } from '../apiCalls';
import { scoreWeighted, regularScore } from '../scoreFunctions';

const RestaurantsItem = ({ restaurant }) => {
    const { userPref } = useSelector((state) => state.preferences);
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState('');
    useEffect(() => {
        const fetchAReview = async () => {
            const resReviews = await fetchResReviews(restaurant.id);
            setReviews(resReviews);
            setReview(
                `${resReviews[0]?.user.username} - ${resReviews[0]?.comment}`
            );
        };
        fetchAReview();
    }, []);
    return (
        <div className="list-group-item list-group-item-action py-3 my-1 card shadow-sm">
            <div className="row">
                <div className="thumb-post col-auto">
                    <img src={restaurant.imgUrl} className="img-thumbnail" />
                </div>
                <div className="RestaurantItem-content card-block col">
                    <div className="RestaurantItem-name">
                        <Link to={`/restaurants/${restaurant.id}`}>
                            <p className="card-title h5"> {restaurant.name}</p>
                        </Link>
                    </div>
                    <div className="RestaurantItem-rating row">
                        <div className="col-auto">
                            <strong>Average Rating</strong>
                        </div>
                        <div className="col">
                            {regularScore(reviews, 1)
                                ? regularScore(reviews, 1)
                                : 'Not Rated'}
                        </div>
                    </div>
                    <div className="RestaurantItem-preference row">
                        <div className="col-auto">
                            <strong className="text-pur">
                                Your Preference Match
                            </strong>
                        </div>
                        <div className="col">
                            {scoreWeighted(userPref, reviews, 1)
                                ? `${scoreWeighted(userPref, reviews, 1)}%`
                                : 'No Reviews To Compare'}
                        </div>
                    </div>
                    <div className="RestaurantItem-first-comment">
                        {review && !review.includes('undefined')
                            ? review
                            : 'No Reviews.'}
                    </div>
                    <div className="d-flex flex-row-reverse ">
                        <Link to={`/restaurants/${restaurant.id}`}>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-light"
                            >
                                View
                            </button>{' '}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantsItem;
