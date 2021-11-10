import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    genres: [],
  },
  reducers: {
    setGenres(state, action) {
      const existingGenreIndex = state.genres.findIndex(
        (genre) => genre === action.payload.value
      );
      const exisitngGenre = state.genres[existingGenreIndex];

      if (!exisitngGenre) {
        state.genres.push(action.payload.value);
      }
    },
    removeGenres(state, action) {
      const existingGenreIndex = state.genres.findIndex(
        (genre) => genre === action.payload.genre
      );
      const existingGenre = state.genres[existingGenreIndex];

      if (existingGenre) {
        state.genres.splice(existingGenreIndex, 1);
      }
    },
  },
});

export const { setGenres, removeGenres } = filterSlice.actions;
export default filterSlice.reducer;
