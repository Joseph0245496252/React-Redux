// import React, { Component } from 'react'
import { combineReducers, createStore } from 'redux';

    // action.js

export const activateAwesomeness = awesomeness => ({
    type: 'ACTIVATE_AWESOMENESS',
    awesomeness
})  // action for activating awesomess text

export const closeAwesomeness = () => ({
    type: 'CLOSE_AWESOMENESS'
}) // activating for deactivating awesomeness text


// reducer.js

export const awesomeness = (state= {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_AWESOMENESS':
            return action.awesomeness;
        case 'CLOSE_AWESOMENESS':
            return {};
        default:
            return state;
    }
};

// this is actually not required for a single reducer 
export const reducers = combineReducers ({ awesomeness, });

// sotore.js

export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
}

export const store = configureStore();


