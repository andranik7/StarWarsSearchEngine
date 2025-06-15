import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [],
    status: 'idle',
    error: null
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        fetchStart(state) {
            state.status = 'loading';
            state.error = null;
        },
        fetchSuccess(state, action) {
            state.status = 'idle';
            state.items = action.payload;
        },
        fetchFailure(state, action) {
            state.status = 'error';
            state.error = action.payload;
        },
        clearCategories(state) {
            Object.assign(state, initialState);
        }
    }
});


export const { fetchStart, fetchSuccess, fetchFailure, clearCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;