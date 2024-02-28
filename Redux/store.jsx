import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Auth/slice";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
