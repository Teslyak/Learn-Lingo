import { createSlice } from '@reduxjs/toolkit';
import { getTeachers } from './operations';

const teachersInitState = {
  teachersCard: [],
  favorite: [],
  isLoading: false,
  error: '',
  card: [],
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: teachersInitState,
  reducers: {
    setFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    delFavorite: (state, action) => {
      state.favorite = state.favorite.filter(e => e.id !== action.payload.id);
    },
    setCard: (state, action) => {
      state.card = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getTeachers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachersCard = action.payload;
        state.error = '';
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCard } = teachersSlice.actions;
export const { setFavorite } = teachersSlice.actions;
export const { delFavorite } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
