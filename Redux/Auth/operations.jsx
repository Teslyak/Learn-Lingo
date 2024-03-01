import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
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

      await updateProfile(user, {
        displayName: name,
      });

      return {
        email: user.email,
        accessToken: user.accessToken,
        id: user.uid,
        name: user.displayName,
      };
    } catch (error) {
      console.log(error);
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
        name: user.displayName,
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

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue("Unable to fetch user");
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const responce = await refreshLogin();
//       return responce.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
