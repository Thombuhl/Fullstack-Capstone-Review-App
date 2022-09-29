import React from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import SearchBar from './Search';

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


    <ResturantsContainer className="mx-5 my-5">
         <div className="row">
          <div className="col-auto d-flex flex-row">
                <FacetSearch />
        </div>
            <div className="col d-flex flex-row-reverse">
            <SearchBar />
            </div>
        
      
            <div className="row py-3">
            <UIContainer className="list-group h-auto col-md-7 ">
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
         </div>
        </ResturantsContainer>

    );
};

export default RestaurantsList;
