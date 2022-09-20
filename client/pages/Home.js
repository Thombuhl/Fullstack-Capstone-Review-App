import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantsList from '../components/RestaurantsList';
import PreferenceLabel from '../components/PreferenceLabel';
import '../styles/Home.css';
import { fetchPrefLabel, setPreferenceLabel } from '../store/preference';

/**
 * COMPONENT
 */
export const Home = () => {
    const { auth } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const prefLabels = await dispatch(fetchPrefLabel());
            dispatch(setPreferenceLabel(prefLabels.payload));
        };
        fetchData();
    }, []);

    return (
        <div className="Home">
            <h3>Welcome, {auth.username}</h3>
            <RestaurantsList />
            <PreferenceLabel />
        </div>
    );
};

export default Home;
