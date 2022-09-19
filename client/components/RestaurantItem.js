import React from 'react';
import '../styles/RestaurantItem.css';

const RestaurantsItem = ({ restaurant }) => {
    return (
        <div className="RestaurantItem">
            <img src={restaurant.imgUrl} />
            <div className="RestaurantItem-content">
                <p className="RestaurantItem-name">{restaurant.name}</p>
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
