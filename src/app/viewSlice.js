import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "viewSlice",
  initialState: {
    view: localStorage.getItem("search-view") || "grid",
  },
  reducers: {
    setView(state, action) {
      const view = action.payload.view;
      state.view = view;

      localStorage.setItem("search-view", view);
    },
  },
});

export const { setView } = viewSlice.actions;

export default viewSlice.reducer;
