import React, { useEffect } from 'react';
import { LabelContainer } from '../styledComponents/PreferenceLabelStyle';
import { useDispatch } from 'react-redux';

export const PreferenceLabel = () => {
    const dispatch = useDispatch();

    return <LabelContainer>PreferenceLabel</LabelContainer>;
};

export default PreferenceLabel;
