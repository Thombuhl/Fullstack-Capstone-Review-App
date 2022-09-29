import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterRestaurants } from '../store';
import { fetchAllRes } from '../apiCalls';

import RestaurantItem from './RestaurantItem';
import {
    ResturantFilter,
    Select,
    Option,
    Button,
} from '../styledComponents/RestaurantList';

import '../styles/RestaurantsList.css';

const FacetSearch = () => {
    //No "ownProps" with useSelector hook. Set filter object using React useState hook.
    const dispatch = useDispatch();

    //Store the user's filter selection.
    const [filterBox, setFilterBox] = useState({});

    const [allRes, setAllRes] = useState([]);

    //On component render, check and see if filter exists, then set the filteredRestaurants state with all matching restaurants.

    useEffect(() => {
        const setRes = async () => {
            console.log('started');
            let res = await fetchAllRes();
            setAllRes(res);
            if (filterBox) {
                dispatch(
                    filterRestaurants(
                        res.filter((restaurant) => {
                            //storing filter selection in variable that can be reused throughout restaurant filter.
                            //Turn state "filter" obj to array.
                            const objEntry = Object.entries(filterBox);

                            //create array of bools for filtering
                            const attributes = objEntry.map(([key, value]) => {
                                console.log('key', key, 'value', value);
                                if (restaurant[key] === undefined) {
                                    throw new Error('check key name');
                                } else {
                                    return restaurant[key] === value;
                                }
                            });
                            return (
                                //check for truthy bools in attribute array and compare to object entires.
                                attributes.filter((attribute) => attribute)
                                    .length === objEntry.length
                            );
                        })
                    )
                );
            } else if (filterBox === 'Categories')
                res.map((restaurant) => {
                    return (
                        <RestaurantItem
                            key={restaurant.id}
                            restaurant={restaurant}
                        />
                    );
                });
        };
        setRes();
    }, [filterBox]);

    //Replaces match.params from ownProps, set filter object with attribute name and val.

    //Handle String Events
    const stashFilteredAttributes = (evt) => {
        const prunedFilterBox = {};
        // user selected value.
        const value = evt.target.value;
        //keys from exisiting filterbox
        const keys = Object.keys(filterBox);
        if (value === 'Price') {
            keys.forEach((key) => {
                if (key !== 'price') {
                    prunedFilterBox[key] = filterBox[key];
                }
            });
            setFilterBox(prunedFilterBox);
        } else if (value === 'Categories') {
            keys.forEach((key) => {
                if (key !== 'category') {
                    prunedFilterBox[key] = filterBox[key];
                }
            });
            setFilterBox(prunedFilterBox);
        } else {
            setFilterBox({
                ...filterBox,
                [evt.target.name]: value,
            });
        }
    };

    //Handle Numbered Events
    const stashFilteredNumbers = (evt) => {
        const prunedFilterBox = {};
        let value = evt.target.value;
        const keys = Object.keys(filterBox);
        if (value === 'Rating') {
            keys.forEach((key) => {
                if (key !== 'rating') {
                    prunedFilterBox[key] = filterBox[key];
                }
            });
            setFilterBox(prunedFilterBox);
        } else {
            setFilterBox({
                ...filterBox,
                [evt.target.name]: (value = Number(value)),
            });
        }
    };
    //Handle Boolean Events
    const stashFilteredBooleans = (evt) => {
        const prunedFilterBox = {};
        const keys = Object.keys(filterBox);
        let value = evt.target.value;
        if (value === 'FALSE') {
            setFilterBox({
                ...filterBox,
                [evt.target.name]: (value = false),
            });
        } else if (value === 'Pickup') {
            keys.forEach((key) => {
                if (key !== 'hasPickup') {
                    prunedFilterBox[key] = filterBox[key];
                }
            });
            setFilterBox(prunedFilterBox);
        } else if (value === 'Delivery') {
            keys.forEach((key) => {
                if (key !== 'hasDelivery') {
                    prunedFilterBox[key] = filterBox[key];
                }
            });
            setFilterBox(prunedFilterBox);
        } else {
            setFilterBox({
                ...filterBox,
                [evt.target.name]: (value = true),
            });
        }
    };
    // Array of 100 restaurants
    const restaurantsArr = allRes;
    // console.log(restaurants);

    //All Categories.
    const categoriess = restaurantsArr.reduce((acc, restaurant) => {
        const category = restaurant.category;
        acc[category] = acc[category] || {
            id: restaurant.id,
            category,
            count: 0,
        };
        acc[category].count++;
        return acc;
    }, {});
    const categoryNames = Object.values(categoriess);

    //Prices
    const prices = restaurantsArr.reduce((acc, restaurant) => {
        const price = restaurant.price;
        acc[price] = acc[price] || {
            id: restaurant.id,
            price,
            count: 0,
        };
        acc[price].count++;
        return acc;
    }, {});
    const bougie = Object.values(prices);

    //Ratings
    const ratings = restaurantsArr.reduce((acc, restaurant) => {
        const rating = restaurant.rating;
        acc[rating] = acc[rating] || {
            id: restaurant.id,
            rating,
            count: 0,
        };
        acc[rating].count++;
        return acc;
    }, {});
    const reviews = Object.values(ratings);

    //Restaurant delivery option
    const deliveries = restaurantsArr.reduce((acc, restaurant) => {
        const delivery = restaurant.hasDelivery;
        acc[delivery] = acc[delivery] || {
            id: restaurant.id,
            delivery,
            count: 0,
        };
        acc[delivery].count++;
        return acc;
    }, {});
    const deliveryBool = Object.values(deliveries);

    //Restaurant pickup option
    const pickups = restaurantsArr.reduce((acc, restaurant) => {
        const pickup = restaurant.hasPickup;
        acc[pickup] = acc[pickup] || {
            id: restaurant.id,
            pickup,
            count: 0,
        };
        acc[pickup].count++;
        return acc;
    }, {});
    const pickupBool = Object.values(pickups);

    //Jquery to reset facet to default using dom elements
    $('button').click(function () {
        $('select').prop('selectedIndex', 0);
    });
    // Styled components.
    return (
        <ResturantFilter className="d-flex">
            <Select
                className="nav-item form-select"
                name="category"
                onChange={stashFilteredAttributes}
            >
                <Option>Categories</Option>
                {categoryNames.map((category) => {
                    return (
                        <Option key={category.id}>{category.category}</Option>
                    );
                })}
            </Select>
            <Select
                className="nav-item form-select"
                name="rating"
                onChange={stashFilteredNumbers}
            >
                <Option>Rating</Option>
                {reviews.map((rate) => {
                    return <Option key={rate.id}>{rate.rating}</Option>;
                })}
            </Select>
            <Select
                className="nav-item form-select"
                name="price"
                onChange={stashFilteredAttributes}
            >
                <Option>Price</Option>
                {bougie.map((price) => {
                    if (!price.price) {
                        return;
                    } else {
                        return <Option key={price.id}>{price.price}</Option>;
                    }
                })}
            </Select>
            <Select
                className="nav-item form-select"
                name="hasDelivery"
                onChange={stashFilteredBooleans}
            >
                <Option>Delivery</Option>
                {deliveryBool.map((element) => {
                    return (
                        <Option key={element.id}>
                            {String(element.delivery).toUpperCase()}
                        </Option>
                    );
                })}
            </Select>
            <Select
                className="nav-item form-select"
                name="hasPickup"
                onChange={stashFilteredBooleans}
            >
                <Option>Pickup</Option>
                {pickupBool.map((element) => {
                    return (
                        <Option key={element.id}>
                            {String(element.pickup).toUpperCase()}
                        </Option>
                    );
                })}
            </Select>
            <button
                type="button"
                class="btn btn-sm btn-outline-light"
                onClick={() => setFilterBox([])}
            >
                Reset
            </button>
        </ResturantFilter>
    );
};

export default FacetSearch;
