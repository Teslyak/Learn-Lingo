import { createSlice } from "@reduxjs/toolkit";
import { logOut, logining, refreshUser, register } from "./operations";

const initialState = {
  name: null,
  email: null,
  token: null,
  id: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.isLoggedIn = true;
      })
      .addCase(logining.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.email = null;
        state.token = null;
        state.id = null;
        state.name = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
