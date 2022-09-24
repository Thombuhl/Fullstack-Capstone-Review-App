import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import RestaurantsList from '../components/RestaurantsList';
import '../styles/Home.css';
import { fetchPrefLabel, setPreferenceLabel } from '../store/preference';
import SearchBar from '../components/Search';

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
            {/* <h3>Welcome, {auth.username}</h3> */}
            <RestaurantsList />
            <SearchBar />
            <GoogleMap />
        </div>
    );
};

export default Home;
