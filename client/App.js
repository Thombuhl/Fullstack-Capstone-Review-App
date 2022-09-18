import React from 'react';

import Navbar from './components/Navbar';
import Routes from './Routes';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes />
        </div>
    );
};

export default App;
