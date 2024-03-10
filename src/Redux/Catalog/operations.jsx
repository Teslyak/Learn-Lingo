import { createAsyncThunk } from "@reduxjs/toolkit";
// import data from "../../teachers.json";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";
export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async ({ signal }, thunkAPI) => {
    try {
      const starCountRef = ref(database);
      const snapshot = await get(starCountRef, { signal });
      const data = snapshot.val();
      return data;
    } catch (erorr) {
      return thunkAPI.rejectWithValue(erorr.message);
    }
  }
);
