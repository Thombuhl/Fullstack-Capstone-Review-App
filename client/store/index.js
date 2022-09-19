// import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
// import thunkMiddleware from "redux-thunk";
import authReducer from './auth';
import restaurantsReducer from './restaurants';
import ratingsReducer from './ratings';
import preferenceReducer from './preference';

// const reducer = combineReducers({ auth, restaurants, ratings });
// const middleware = applyMiddleware(
//   thunkMiddleware,
//   createLogger({ collapsed: true })
// );
// const store = createStore(reducer, middleware);
const store = configureStore({
    reducer: {
        auth: authReducer,
        restaurants: restaurantsReducer,
        ratings: ratingsReducer,
        preferences: preferenceReducer,
    },
});

export default store;
export * from './auth';
export * from './restaurants';
export * from './ratings';
export * from './preference';
// export * from "./preferences";
