import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
    const { name, displayName, handleSubmit, error } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="py-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Button className="btn btn-primary btn-outline-light btn-lg px-4 gap-3">
                    Create Account
                </Button>
                <Button
                    onClick={handleShow}
                    className="btn btn-outline-light btn-lg px-4"
                    variant="primary"
                >
                    Log In
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={handleSubmit}
                        name={name}
                        style={{ textAlign: 'center' }}
                    >
                        <img
                            className="mb-4"
                            src="logo.png"
                            alt=""
                            width="auto"
                            height="57"
                        />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input
                                type="username"
                                name="username"
                                className="form-control"
                                id="floatingInput"
                                placeholder="your username"
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>

                        <button
                            className="w-50 btn btn-sm btn-primary mt-3"
                            type="submit"
                        >
                            {displayName}
                        </button>

                        {error && error.response && (
                            <div> {error.response.data} </div>
                        )}
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <p class=" text-muted">&copy; 2017–2022</p>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
    return {
        name: 'login',
        displayName: 'Login',
        error: state.auth.error,
    };
};

const mapSignup = (state) => {
    return {
        name: 'signup',
        displayName: 'Sign Up',
        error: state.auth.error,
    };
};

const mapDispatch = (dispatch) => {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const formName = evt.target.name;
            const username = evt.target.username.value;
            const password = evt.target.password.value;
            dispatch(authenticate({ username, password, formName }));
        },
    };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
