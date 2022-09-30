import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    SearchInput,
    SearchInputContainer,
} from '../styledComponents/SearchBoxStyle';
import RestaurantsItem from './RestaurantItem';

const SearchBar = () => {
    //State for fetched Restaurants to be used in filter.
    const [restaurants, setRestaurants] = useState([]);

    //Fetch Restaurants from API
    async function fetchRestaurants() {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/restaurants',
                {
                    headers: {
                        authorization: window.localStorage.getItem('token'),
                    },
                }
            );
            setRestaurants(response.data);
        } catch (er) {
            console.log(er);
        }
    }
    //Set Component State on render.
    useEffect(() => {
        fetchRestaurants();
    });

    //Hook to store users's search to be comppared to fetched restaurants.
    const [searchBox, setSearchBox] = useState('');

    return (
        <>
            <SearchInputContainer>
                <SearchInput
                    className="form-control"
                    placeholder="Search"
                    onChange={(event) => setSearchBox(event.target.value)}
                />
            </SearchInputContainer>
            {searchBox.length !== 0 && (
                <>
                    {restaurants
                        .filter(
                            (restaurant) =>
                                restaurant.name.includes(searchBox) ||
                                restaurant.alias.includes(searchBox) ||
                                restaurant.address.includes(searchBox) ||
                                restaurant.category.includes(searchBox)
                        )
                        .map((restaurant) => {
                            return (
                                <RestaurantsItem
                                    key={restaurant.id}
                                    restaurant={restaurant}
                                />
                            );
                        })}
                </>
            )}
        </>
    );
};

export default SearchBar;
