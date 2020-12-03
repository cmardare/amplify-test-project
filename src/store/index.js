import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'auth'

export default function createStore(preloadedState){
    return configureStore({
        reducer: {
            auth: authReducer
        },
        preloadedState
    })
}

