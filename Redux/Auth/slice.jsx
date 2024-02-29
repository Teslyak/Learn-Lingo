import { createSlice } from "@reduxjs/toolkit";
import { logOut, logining, register } from "./operations";

const initialState = {
  name: null,
  email: null,
  token: null,
  id: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
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
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.email = null;
        state.token = null;
        state.id = null;
        state.name = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
