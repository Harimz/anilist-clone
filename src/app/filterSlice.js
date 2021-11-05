import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    searchValue: "",
    genres: [],
    format: "",
    publishingStatus: "",
    sort: "",
    orderBy: "",
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload.search;
    },
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
    setFormat(state, action) {
      state.format = action.payload.format;
    },
    setPublishingStatus(state, action) {
      state.publishingStatus = action.payload.status;
    },
    setSort(state, action) {
      state.sort = action.payload.sort;
    },
    setOrder(state, action) {
      state.orderBy = action.payload.order;
    },
  },
});

export const {
  setSearchValue,
  setGenres,
  removeGenres,
  setFormat,
  setPublishingStatus,
  setSort,
  setOrder,
} = filterSlice.actions;
export default filterSlice.reducer;
