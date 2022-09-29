import React, { useEffect } from 'react';
import '../styles/RestaurantItem.css';
import { Link } from 'react-router-dom';

const RestaurantsItem = ({ restaurant }) => {
    useEffect(() => {
        // const marker = new google.maps.Marker({
        //     position: {
        //         lat: restaurant.latitude,
        //         lng: restaurant.longitude,
        //     },
        //     title: restaurant.name,
        //     animation: google.maps.Animation.DROP,
        // });
        // marker.setMap(googleMap);
    }, []);
    return (
        <div className="list-group-item list-group-item-action d-flex gap-3 py-3 my-1 card shadow-sm col-md-6">
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
                        <div className="col">10</div>
                    </div>
                    <div className="RestaurantItem-preference row">
                        <div className="col-auto">
                            <strong className="text-pur">
                                Preference Fits
                            </strong>
                        </div>
                        <div className="col">96%</div>
                    </div>
                    <div className="RestaurantItem-first-comment">
                        {' '}
                        This place rocks
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
