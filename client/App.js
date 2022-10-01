import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserPreferences } from './store';

import Navbar from './components/Navbar';
import Routes from './Routes';
import './styles/App.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserPreferences());
    }, []);

    return (
        <div>
            <Navbar />
            <Routes />
        </div>
    );
};

export default App;
