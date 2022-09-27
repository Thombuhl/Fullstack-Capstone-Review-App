import React from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantItem from './RestaurantItem';
import FacetSearch from './FacetSearch';
import {
    ResturantsContainer,
    UIContainer,
} from '../styledComponents/RestaurantList';

import '../styles/RestaurantsList.css';

const RestaurantsList = (props) => {
    const { page } = useParams();
    const { itemPerPage } = props;

    //No "ownProps" with useSelector hook. Set filter object using React useState hook.
    const { restaurants } = useSelector((state) => state.restaurants);

    const currRes = restaurants.slice(
        (page - 1) * itemPerPage,
        page * itemPerPage
    );

    // Styled components.
    return (
        <ResturantsContainer>
            <FacetSearch />
            <UIContainer>
                {currRes.map((restaurant) => {
                    return (
                        <RestaurantItem
                            key={restaurant.id}
                            restaurant={restaurant}
                        />
                    );
                })}
            </UIContainer>
        </ResturantsContainer>
    );
};

export default RestaurantsList;
