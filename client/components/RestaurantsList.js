import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserPreferences } from '../store';

import { useParams } from 'react-router-dom';
import SearchBar from './Search';

import RestaurantItem from './RestaurantItem';
import FacetSearch from './FacetSearch';
import AddressPicker from './AddressPicker';
import {
    ResturantsContainer,
    Search,
    UIContainer,
} from '../styledComponents/RestaurantList';

import '../styles/RestaurantsList.css';

const RestaurantsList = (props) => {
    // const dispatch = useDispatch();
    const { page } = useParams();
    const { itemPerPage } = props;

    //No "ownProps" with useSelector hook. Set filter object using React useState hook.
    const { restaurants } = useSelector((state) => state.restaurants);

    const currRes = restaurants.slice(
        (page - 1) * itemPerPage,
        page * itemPerPage
    );
    // useEffect(() => {
    //     dispatch(fetchUserPreferences());
    // }, []);

    // Styled components.
    return (
        <ResturantsContainer className="my-1">
            <div className="row py-3">
                <UIContainer className="list-group h-auto col-md-7 ">
                    <SearchBar />
                    {currRes.map((restaurant) => {
                        return (
                            <RestaurantItem
                                key={restaurant.id}
                                restaurant={restaurant}
                            />
                        );
                    })}
                </UIContainer>
            </div>
        </ResturantsContainer>
    );
};

export default RestaurantsList;
