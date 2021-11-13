import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    genres: [],
    search: "",
    type: "",
    status: "",
    sort: "",
    order_by: "",
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

      if (action.payload.type === "REMOVE_ALL") {
        state.genres = [];
      }
    },
    setFilters(state, action) {
      state[action.payload.type] = action.payload.value;
    },
    resetFilters(state, action) {
      state.search = "";
      state.genres = [];
      state.sort = "";
      state.status = "";
      state.type = "";
      state.order_by = "";
    },
  },
});

export const { setGenres, removeGenres, setFilters, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
