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
} from '../styledComponents/PreferenceStyle';

import {
    addPreference,
    setUserPreference,
    fetchPreferences,
    fetchUserPreferences,
} from '../store/preference';

const Preference = () => {
    const dispatch = useDispatch();

    const [preferences, setPreferences] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const prefData = await dispatch(fetchPreferences());
            console.log(prefData.payload);
            setPreferences(prefData.payload);

            const userPrefData = await dispatch(fetchUserPreferences());
            console.log(userPrefData.payload);
            dispatch(addPreference(prefData.payload));
            dispatch(setUserPreference(userPrefData.payload));
        };
        fetchData();
    }, []);

    return (
        <>
            <Container>
                <Text> Lets Setup your Preferences</Text>
                <AllPreferences>
                    {preferences
                        ? preferences.map((preference) => {
                              return (
                                  <>
                                      <PreferenceContainer>
                                          <PreferenceText>
                                              {preference.name}
                                          </PreferenceText>
                                      </PreferenceContainer>
                                      <Slider pref_id={preference.id} />
                                  </>
                              );
                          })
                        : null}
                </AllPreferences>
            </Container>
        </>
    );
};

export default Preference;
