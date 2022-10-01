import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from './Slider';
import {
    Container,
    Text,
    AllPreferences,
    PreferenceContainer,
} from '../styledComponents/PreferenceStyle';

import { fetchPreferences, fetchUserPreferences } from '../store/preference';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const Preference = () => {
    const dispatch = useDispatch();
    const { userPref, prefNames } = useSelector((state) => state.preferences);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchPreferences());
            dispatch(fetchUserPreferences());
        };
        fetchData();
    }, []);

    return (
        <>
            <Container>
                <div className="header"></div>
                <AllPreferences>
                    <Text> Lets Setup your Preferences</Text>
                    {userPref.map((pref) => {
                        return (
                            <div key={pref.id} id="pref">
                                <Slider
                                    value={pref.score}
                                    pref_id={pref.preferenceId}
                                    name={
                                        prefNames.find(
                                            (item) =>
                                                item.id === pref.preferenceId
                                        ).name
                                    }
                                />
                            </div>
                        );
                    })}
                </AllPreferences>
                <div className="footer"></div>
            </Container>
        </>
    );
};

export default Preference;
