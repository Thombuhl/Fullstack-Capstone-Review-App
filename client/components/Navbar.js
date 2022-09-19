import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
    <>
        <nav>
            {isLoggedIn ? (
                <div style={{ textAlign: 'center' }}>
                    {/* The navbar will show these links after you log in */}
                    <Link to="/home">Home</Link>
                    <a href="#" onClick={handleClick}>
                        Logout
                    </a>
                    <div>
                        {' '}
                        <Link to="/preference">Preference</Link>
                    </div>
                </div>
            ) : (
                <div className="text-end" style={{ textAlign: 'center' }}>
                    <div className="row">
                        <div className="col-md-1">
                            {' '}
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                    <div className="px-4 py-5 my-5 text-center">
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
                                mobile-first sites with Bootstrap, the world’s
                                most popular front-end open source toolkit,
                                featuring Sass variables and mixins, responsive
                                grid system, extensive prebuilt components, and
                                powerful JavaScript plugins.
                            </p>
                        </div>
                        {/* The navbar will show these links before you log in */}
                    </div>
                </div>
            )}
        </nav>
    </>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        isLoggedIn: !!state.auth.auth.id,
    };
};

const mapDispatch = (dispatch) => {
    return {
        handleClick() {
            dispatch(logout());
        },
    };
};

export default connect(mapState, mapDispatch)(Navbar);
