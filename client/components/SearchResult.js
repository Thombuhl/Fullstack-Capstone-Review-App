import React from 'react';
import { useSelector } from 'react-redux';

const SearchResult = () => {
    const { resturants } = useSelector((state) => state);
    return (
        <>
            <ul>
                {resturants
                    ? resturants.map((resturant) => {
                          return (
                              <li key={resturant.id}>
                                  <Link to={`/students/${student.id}`}>
                                      {resturant.name}
                                  </Link>
                              </li>
                          );
                      })
                    : null}
            </ul>
        </>
    );
};

export default SearchResult;
