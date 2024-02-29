import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const register = createAsyncThunk(
  "auth/register",
  async ({ value }, thunkAPI) => {
    const { name, email, password } = value;

    const auth = getAuth();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      return {
        email: user.email,
        accessToken: user.accessToken,
        id: user.uid,
        name,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logining = createAsyncThunk(
  "auth/login",
  async ({ value }, thunkAPI) => {
    const { email, password } = value;

    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      return {
        email: user.email,
        accessToken: user.accessToken,
        id: user.uid,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
