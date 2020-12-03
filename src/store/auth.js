import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {},
    extraReducers: {}

});

const {actions,reducer} = authSlice;

export const { setUser, setIsAuthorized } = actions;

export default reducer;