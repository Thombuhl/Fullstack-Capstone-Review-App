import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
    SearchInput,
    SearchInputContainer,
    ResturantFilter,
} from '../styledComponents/SearchBoxStyle';
import SearchResult from './SearchResult';

const SearchBar = ({ history }) => {
    //Hook to grab resturant state from redux store and use for filtering
    const { restaurants } = useSelector((state) => state);

    //Hook to store users's search to be comppared to resturant state.
    const [searchBox, setSearchBox] = useState('');

    return (
        <>
            <SearchInputContainer>
                <SearchInput
                    placeholder="Search"
                    onChange={(event) =>
                        history.push(`/search/${event.target.value}`)
                    }
                />
            </SearchInputContainer>
        </>
    );
};

export default SearchBar;
