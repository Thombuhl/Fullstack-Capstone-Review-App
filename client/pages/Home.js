import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantsList from '../components/RestaurantsList';
import '../styles/Home.css';

/**
 * COMPONENT
 */
export const Home = () => {
    const { auth } = useSelector((state) => state.auth);

    return (
        <div className="Home">
            <h3>Welcome, {auth.username}</h3>
            <RestaurantsList />
        </div>
    );
};

export default Home;
