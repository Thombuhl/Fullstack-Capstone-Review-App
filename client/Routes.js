import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './pages/Home';
import Preference from './components/Preference';
import Restaurant from './pages/Restaurant';
import { me, fetchRatings, fetchRestaurants } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
    componentDidMount() {
        this.props.loadInitialData();
    }

    render() {
        const { isLoggedIn } = this.props;

        return (
            <>
                {isLoggedIn ? (
                    <Switch>
                        <Route path="/home/:page" component={Home} />
                        <Route path="/home" component={Home}><Redirect to="/home/1" /> </Route>
                        <Route path="/login" component={Home}><Redirect to="/home/1" /> </Route>
                        <Route path="/restaurants/:id" component={Restaurant} />
                        <Route path="/preference" component={Preference} />
                        {/* <Redirect to="/home" /> */}
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                    </Switch>
                )}
            </>
        );
    }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
        // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
        isLoggedIn: !!state.auth.auth.id,
    };
};

const mapDispatch = (dispatch) => {
    return {
        loadInitialData() {
            dispatch(me());
            dispatch(fetchRatings());
            dispatch(fetchRestaurants());
        },
    };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
