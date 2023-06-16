import { createSlice } from '@reduxjs/toolkit';
import * as authApi from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isUserRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authApi.registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authApi.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authApi.logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authApi.fetchCurrentUser.pending, state => {
        state.isUserRefreshing = true;
      })
      .addCase(authApi.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isUserRefreshing = false;
      })
      .addCase(authApi.fetchCurrentUser.rejected, state => {
        state.isUserRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
