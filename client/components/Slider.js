import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    SliderContainer,
    SliderInput,
    SliderValueText,
} from '../styledComponents/SliderStyle';

import { RootContainer, Text } from '../styledComponents/SliderStyle';

import {
    setPreferenceValue,
    updatePreferenceValue,
    fetchUserPreferences,
} from '../store/preference';

const Slider = (props) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState(props.value);

    const handleOnChange = (evt) => {
        evt.preventDefault();
        const newValue = evt.target.value;

        setValue(newValue);
        dispatch(
            updatePreferenceValue({
                prefVale: parseInt(newValue),
                prefId: props.pref_id,
            })
        );
        dispatch(fetchUserPreferences());
    };

    return (
        <RootContainer>
            <Text className="py-2 display-5 fw-bold">{props.name}</Text>
            <SliderContainer>
                <SliderValueText>{value}</SliderValueText>
                <SliderInput
                    type="range"
                    min={1}
                    max={5}
                    value={value}
                    className="slider"
                    onChange={handleOnChange}
                ></SliderInput>
            </SliderContainer>
        </RootContainer>
    );
};

export default Slider;
