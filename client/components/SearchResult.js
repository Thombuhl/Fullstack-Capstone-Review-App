import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchResult = () => {
    //Return JSX
    return (
        <>
            <div>Test</div>
            <ul>
                {restaurants
                    ? restaurants.map((restaurant) => {
                          return (
                              <li key={restaurant.id}>
                                  <Link to={`/restaurant/${restaurant.id}`}>
                                      {restaurant.name}
                                  </Link>
                              </li>
                          );
                      })
                    : ''}
            </ul>
        </>
    );
};

export default SearchResult;
