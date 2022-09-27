import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { logout } from '../store';
import { LinksContainer, NavContainer } from '../styledComponents/NavBarStyle';
import LandingPage from './LandingPage';

const Navbar = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    const isLoggedIn = !!auth.id;
    const handleClick = () => {
        dispatch(logout());
    };
    return (
        <div>
            <NavContainer>
                {isLoggedIn ? (
                    <LinksContainer>
                        <Link to="/home/1">Home</Link>
                        <Link to="/preference">Preference</Link>
                        <Link to="/" onClick={handleClick}>
                            Logout
                        </Link>
                    </LinksContainer>
                ) : (
                  <LandingPage />
                )}
            </NavContainer>
        </div>
    );
};

export default Navbar;
