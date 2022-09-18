import React, { useState } from 'react';
import {
    SliderContainer,
    SliderInput,
    SliderValueText,
} from '../styledComponents/SliderStyle';

import { updatePreferenceValue } from '../store/preference';

const Slider = (preference_name) => {
    const [preferenceValue, setPreferenceValue] = useState(3);

    const handleOnChange = (evt) => {
        evt.preventDefault();
        console.log(evt);
        setPreferenceValue(evt.target.value);
        dispatch(updatePreferenceValue(preference));
    };

    return (
        <>
            <SliderValueText>{preferenceValue}</SliderValueText>
            <SliderContainer>
                <SliderInput
                    type="range"
                    min={1}
                    max={5}
                    value={preferenceValue}
                    className="slider"
                    onChange={handleOnChange}
                ></SliderInput>
            </SliderContainer>
        </>
    );
};

export default Slider;
