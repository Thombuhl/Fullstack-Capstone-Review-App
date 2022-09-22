import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { logout } from '../store';
import { LinksContainer, NavContainer } from '../styledComponents/NavBarStyle';

const Navbar = ({ handleClick, isLoggedIn }) => (
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
                <div class="text-end ">

                    <div class="px-4 py-5 my-5 text-center ">
                        <img
                            class="d-block mx-auto mb-4"
                            src="logoCha.png"
                            alt=""
                            width="auto"
                            height="70"
                        />
                        <h1 class="py-4 display-5 fw-bold">
                            Finding the resturant you need
                        </h1>
                        <div class="col-lg-6 mx-auto">
                            <p class="lead mb-4">
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
                                <div className="py-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
               <Link to='/signup'> <Button className="btn btn-primary btn-outline-light btn-lg px-4 gap-3">
                    Create Account
                </Button></Link>
               <Link to='/login'> <Button
 
                    className="btn btn-outline-light btn-lg px-4"
                    variant="primary"
                >
                    Log In
                </Button></Link>
            </div>
                </div>
            )}
        </NavContainer>
    </div>
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
