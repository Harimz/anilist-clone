import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "viewSlice",
  initialState: {
    view: localStorage.getItem("search-view") || "grid",
    userView: localStorage.getItem("user-view") || "card",
  },
  reducers: {
    setView(state, action) {
      const view = action.payload.view;
      state.view = view;

      localStorage.setItem("search-view", view);
    },
    setUserView(state, action) {
      const view = action.payload.view;
      state.userView = view;

      localStorage.setItem("user-view", view);
    },
  },
});

export const { setView, setUserView } = viewSlice.actions;

export default viewSlice.reducer;
