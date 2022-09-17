import React from "react";
import { connect } from "react-redux";
import Slider from "./Slider";
import {
  Container,
  Text,
  Button,
  PreferenceText,
  AllPreferences,
  PreferenceContainer,
  SliderPreferences,
} from "../styledComponents/PreferenceStyle";

const Preference = () => {
  return (
    <>
      <Text> Lets Setup your Preferences</Text>
      <Container>
        <AllPreferences>
          <PreferenceContainer>
            <PreferenceText>Cleaniness</PreferenceText>
          </PreferenceContainer>
          <PreferenceContainer>
            <PreferenceText>Authentic</PreferenceText>
          </PreferenceContainer>
          <PreferenceContainer>
            <PreferenceText>Cost</PreferenceText>
          </PreferenceContainer>
          <PreferenceContainer>
            <PreferenceText>Service</PreferenceText>
          </PreferenceContainer>
          <PreferenceContainer>
            <PreferenceText>Food</PreferenceText>
          </PreferenceContainer>
        </AllPreferences>
        <SliderPreferences>
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
        </SliderPreferences>

        <Button>Save</Button>
      </Container>
    </>
  );
};

export default connect()(Preference);
