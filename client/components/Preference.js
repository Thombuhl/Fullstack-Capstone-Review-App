import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from './Slider';
import {
    Container,
    Text,
    PreferenceText,
    AllPreferences,
    PreferenceContainer,
} from '../styledComponents/PreferenceStyle';

import { fetchUserPreferences } from '../store/preference';

const Preference = () => {
    const dispatch = useDispatch();
    const { userPref, prefNames } = useSelector((state) => state.preferences);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchUserPreferences());
        };
        fetchData();
    }, []);

    return (
        <>
            <Container>
                <Text> Lets Setup your Preferences</Text>
                <AllPreferences>
                    {userPref.map((pref) => {
                        return (
                            <div key={pref.id}>
                                <PreferenceContainer>
                                    <PreferenceText>
                                        {
                                            prefNames.find(
                                                (item) =>
                                                    item.id ===
                                                    pref.preferenceId
                                            ).name
                                        }
                                    </PreferenceText>
                                </PreferenceContainer>
                                <Slider
                                    value={pref.score}
                                    pref_id={pref.preferenceId}
                                />
                            </div>
                        );
                    })}
                </AllPreferences>
            </Container>
        </>
    );
};

export default Preference;
