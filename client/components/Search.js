import React, { useEffect } from 'react';
import { LabelContainer } from '../styledComponents/PreferenceLabelStyle';
import { useDispatch, useSelector } from 'react-redux';

export const Search = () => {
    const dispatch = useDispatch();

    return <LabelContainer>PreferenceLabel</LabelContainer>;
};

export default Search;
