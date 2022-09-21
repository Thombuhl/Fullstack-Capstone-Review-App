import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { LinksContainer, NavContainer } from '../styledComponents/NavBarStyle';

const Navbar = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    console.log(auth);
    const isLoggedIn = !!auth.id;
    const handleClick = () => {
        dispatch(logout());
    };
    return (
        <div>
            <NavContainer>
                {isLoggedIn ? (
                    <LinksContainer>
                        <Link to="/home">Home</Link>
                        <Link to="/preference">Preference</Link>
                        <Link to="/" onClick={handleClick}>
                            Logout
                        </Link>
                    </LinksContainer>
                ) : (
                    <div className="text-end ">
                        <div className="px-4 py-5 my-5 text-center ">
                            <img
                                className="d-block mx-auto mb-4"
                                src="logoCha.png"
                                alt=""
                                width="auto"
                                height="70"
                            />
                            <h1 className="py-4 display-5 fw-bold">
                                Finding the resturant you need
                            </h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="lead mb-4">
                                    Quickly design and customize responsive
                                    mobile-first sites with Bootstrap, the
                                    world’s most popular front-end open source
                                    toolkit, featuring Sass variables and
                                    mixins, responsive grid system, extensive
                                    prebuilt components, and powerful JavaScript
                                    plugins.
                                </p>
                            </div>
                            {/* The navbar will show these links before you log in */}
                        </div>
                    </div>
                )}
            </NavContainer>
        </div>
    );
};

export default Navbar;
