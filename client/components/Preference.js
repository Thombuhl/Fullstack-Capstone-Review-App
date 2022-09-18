import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Slider from './Slider';
import {
    Container,
    Text,
    Button,
    PreferenceText,
    AllPreferences,
    PreferenceContainer,
    SliderPreferences,
} from '../styledComponents/PreferenceStyle';

import { addPreference, fetchPreferences } from '../store/preference';

const Preference = () => {
    const dispatch = useDispatch();

    const [preferences, setPreferences] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await dispatch(fetchPreferences());
            setPreferences(data.payload);

            dispatch(addPreference(data.payload));
        };
        fetchData();
    }, []);

    return (
        <>
            <Text> Lets Setup your Preferences</Text>
            <Container>
                <AllPreferences>
                    {preferences
                        ? preferences.map((preference) => {
                              return (
                                  <PreferenceContainer>
                                      <PreferenceText>
                                          {preference.name}
                                      </PreferenceText>
                                      <SliderPreferences>
                                          <Slider />
                                      </SliderPreferences>
                                  </PreferenceContainer>
                              );
                          })
                        : null}
                </AllPreferences>
                <Button>Save</Button>
            </Container>
        </>
    );
};

export default Preference;
