import { createSlice } from '@reduxjs/toolkit';

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: { isSubscribed: localStorage.getItem('subscribed') === 'true' },
    reducers: {
        toggleSubscription: (state) => {
            state.isSubscribed = !state.isSubscribed;
        },
    },
});

export const { toggleSubscription } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
