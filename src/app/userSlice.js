import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
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
  },
});

export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;
