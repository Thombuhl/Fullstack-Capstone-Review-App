import React, { useState } from "react";
import { connect } from "react-redux";
import { SliderContainer, SliderInput } from "../styledComponents/SliderStyle";

const handleOnChange = (evt) => {};

const Slider = () => {
  return (
    <>
      <SliderContainer>
        <SliderInput
          type="range"
          min={1}
          max={5}
          value={0}
          className="slider"
          onChange={handleOnChange}
        ></SliderInput>
      </SliderContainer>
    </>
  );
};

export default connect()(Slider);
