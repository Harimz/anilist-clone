import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || null,
    animelist: [],
    mangalist: [],
  },
  reducers: {
    setCredentials(state, action) {
      const user = action.payload.user;
      const token = action.payload.token;

      state.user = user;
      state.token = token;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
    },
    logout(state, action) {
      state.user = null;
      state.token = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    setAnimeList(state, action) {
      state.animelist = action.payload.data;
    },
    setMangaList(state, action) {
      state.mangalist = action.payload.data;
    },
  },
});

export const { setCredentials, logout, setAnimeList, setMangaList } =
  userSlice.actions;

export default userSlice.reducer;
