import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    username: null,
    status: 'idle',
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.status = 'loading';
            state.error = null;
        },
        loginSuccess(state, action) {
            state.status = 'idle';
            state.token = action.payload.token;
            state.username = action.payload.username;
        },
        loginFailure(state, action) {
            state.status = 'error';
            state.error = action.payload;
        },
        logout(state) {
            Object.assign(state, initialState);
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
