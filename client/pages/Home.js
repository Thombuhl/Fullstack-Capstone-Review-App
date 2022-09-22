import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import RestaurantsList from '../components/RestaurantsList';
import Search from '../components/Search';
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
            {/* <h3>Welcome, {auth.username}</h3> */}
            <RestaurantsList />
            <GoogleMap />
            <Search />
        </div>
    );
};

export default Home;
