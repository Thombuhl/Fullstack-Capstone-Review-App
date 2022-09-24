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
        <div className="RestaurantItem">
            <img src={restaurant.imgUrl} />
            <div className="RestaurantItem-content">
                <p className="RestaurantItem-name">
                    <Link to={`/restaurants/${restaurant.id}`}>
                        {restaurant.name}
                    </Link>
                </p>
                <div className="RestaurantItem-rating">10</div>
                <div className="RestaurantItem-preference"> 96%</div>
                <div className="RestaurantItem-first-comment">
                    {' '}
                    This place rocks
                </div>
            </div>
        </div>
    );
};

export default RestaurantsItem;
