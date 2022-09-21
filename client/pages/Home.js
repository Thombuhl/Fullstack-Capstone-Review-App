import React from 'react';
import { useSelector } from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import RestaurantsList from '../components/RestaurantsList';
import '../styles/Home.css';

/**
 * COMPONENT
 */
export const Home = () => {
    const { auth } = useSelector((state) => state.auth);

    return (
        <div className="Home">
            {/* <h3>Welcome, {auth.username}</h3> */}
            <RestaurantsList />
            <GoogleMap />
        </div>
    );
};

export default Home;
