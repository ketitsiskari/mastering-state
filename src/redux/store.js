import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import subscriptionReducer from './subscriptionSlice';
import visibilityReducer from './visibilitySlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
        subscription: subscriptionReducer,
        visibility: visibilityReducer,
    },
});

export default store;
