import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { LinksContainer, NavContainer } from '../styledComponents/NavBarStyle';

const Navbar = ({ handleClick, isLoggedIn }) => (
<<<<<<< HEAD
  <div>
    
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <div> <Link to="/preference">Preference</Link></div>
        </div>
      ) : (
        
    <div class="text-end">
      <div class="px-4 py-5 my-5 text-center" >
      <img class="d-block mx-auto mb-4" src="logoCha.png" alt="" width="auto" height="70" />
        <h1 class="py-4 display-5 fw-bold">Finding the resturant you need</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

        </div>
           {/* The navbar will show these links before you log in */}
    </div>

        </div>
      )}
    </nav>
  </div>
=======
    <div>
        <NavContainer>
            {isLoggedIn ? (
                <LinksContainer>
                    <Link to="/home">Home</Link>
                    <Link to="/preference">Preference</Link>
                    <Link to="/home" onClick={handleClick}>
                        Logout
                    </Link>
                </LinksContainer>
            ) : (
                <div class="text-end">
                    <div class="row">
                        <div class="col-md-1">
                            {' '}
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                    <div class="px-4 py-5 my-5 text-center">
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
                </div>
            )}
        </NavContainer>
    </div>
>>>>>>> f69f4511a95fc5842f6144cc082cd8dd37255ffd
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
