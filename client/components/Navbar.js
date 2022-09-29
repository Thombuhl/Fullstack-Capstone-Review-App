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
                <div className="row">
                <div className = "col-md-1 "><img src="logo.png" weidth="auto" height="30"/></div>
                    <LinksContainer className="col-md-11">
                        <Link to="/home/1">Home</Link>
                        <Link to="/preference">Preference</Link>
                        <Link to="/" onClick={handleClick}>
                            Logout
                        </Link>
                    </LinksContainer>
                </div>
                ) : (
                  <LandingPage />
                )}
            </NavContainer>
        </div>
    );
};

export default Navbar;
