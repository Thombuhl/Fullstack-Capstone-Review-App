import React from "react";
import { connect } from "react-redux";
import Slider from "./Slider";
import {
  Container,
  Text,
  Button,
  PreferenceText,
  AllPreferences,
} from "../styledComponents/PreferenceStyle";

const Preference = () => {
  return (
    <>
      <Container>
        <Text> Lets Setup your Preferences</Text>
        <AllPreferences>
          <PreferenceText>
            Cleaniness
            <Slider />
          </PreferenceText>
          <PreferenceText>
            Authentic
            <Slider />
          </PreferenceText>
          <PreferenceText>
            Cost
            <Slider />
          </PreferenceText>
          <PreferenceText>
            Service
            <Slider />
          </PreferenceText>
          <PreferenceText>
            Food
            <Slider />
          </PreferenceText>
        </AllPreferences>
        <Button>Save</Button>
      </Container>
    </>
  );
};

export default connect()(Preference);
