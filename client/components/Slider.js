import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  SliderContainer,
  SliderInput,
  SliderValueText,
} from "../styledComponents/SliderStyle";

const Slider = (prefrencetype) => {
  const [prefrence, setPreference] = useState(3);
  const dispatch = useDispatch();

  const handleOnChange = (evt) => {
    setPreference(evt.target.value);
    dispatch({})
  };

  return (
    <>
      <SliderValueText>{sliderVal}</SliderValueText>
      <SliderContainer>
        <SliderInput
          type="range"
          min={1}
          max={5}
          value={sliderVal}
          className="slider"
          onChange={handleOnChange}
        ></SliderInput>
      </SliderContainer>
    </>
  );
};

const mapDispatchToProps = () => {
  return (
    
  )
}

export default connect()(Slider);
