import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get } from "firebase/database";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (_, thunkAPI) => {
    try {
      const database = getDatabase();
      const starCountRef = ref(database);
      const snapshot = await get(starCountRef);
      const data = snapshot.val();
      console.log(data);
    } catch (erorr) {
      return thunkAPI.rejectWithValue(erorr.message);
    }
  }
);
