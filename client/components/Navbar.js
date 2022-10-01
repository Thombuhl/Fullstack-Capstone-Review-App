import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link, Route } from 'react-router-dom';
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
                    <div className="contianer">
                        <div className="row">
                            <div className="col">
                                <LinksContainer className="mb-2  px-4 d-flex">
                                    <Link className="" to="/home/1">
                                        Home
                                    </Link>
                                    <Link className="" to="/preference">
                                        Preference
                                    </Link>
                                    <Link
                                        className=""
                                        to="/"
                                        onClick={handleClick}
                                    >
                                        Logout
                                    </Link>
                                </LinksContainer>
                            </div>
                        </div>
                    </div>
                ) : (
                    <LandingPage />
                )}
            </NavContainer>
        </div>
    );
};

export default Navbar;
