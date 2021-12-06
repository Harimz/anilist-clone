import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || null,
    contentEntry: {
      status: "",
      score: 0,
      episodeProgress: 0,
      volumesRead: 0,
      startDate: "",
      finishDate: "",
      totalRewatches: 0,
      totalRereads: 0,
      note: "",
    },
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
    setAnimeEntry(state, action) {
      state.contentEntry[action.payload.type] = action.payload.value;
    },
  },
});

export const { setCredentials, logout, setAnimeEntry } = userSlice.actions;

export default userSlice.reducer;
