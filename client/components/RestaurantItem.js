import React, { useEffect, useState } from 'react';
import '../styles/RestaurantItem.css';
import { Link } from 'react-router-dom';
import { fetchResReviews } from '../apiCalls';

const RestaurantsItem = ({ restaurant }) => {
    const [review, setReview] = useState('');
    useEffect(() => {
        const fetchAReview = async () => {
            const resReviews = await fetchResReviews(restaurant.id);
            setReview(
                `${resReviews[0].user.username} - ${resReviews[0].comment}`
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
                    <p className="RestaurantItem-name">
                        <Link to={`/restaurants/${restaurant.id}`}>
                            <p className="card-title h5"> {restaurant.name}</p>
                        </Link>
                    </p>
                    <div className="RestaurantItem-rating row">
                        <div className="col-auto">
                            <strong>Rating Scores</strong>
                        </div>
                        <div className="col">{restaurant.rating}</div>
                    </div>
                    <div className="RestaurantItem-preference row">
                        <div className="col-auto">
                            <strong className="text-pur">
                                Your Preference Match
                            </strong>
                        </div>
                        <div className="col">96%</div>
                    </div>
                    <div className="RestaurantItem-first-comment">
                        {review ? review : 'No Reviews.'}
                    </div>
                    <div className="d-flex flex-row-reverse ">
                        <Link to={`/restaurants/${restaurant.id}`}>
                            <button
                                type="button"
                                class="btn btn-sm btn-outline-light"
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
