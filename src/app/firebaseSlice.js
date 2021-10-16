import { createSlice } from "@reduxjs/toolkit";

import { firebase } from "../lib/firebase.config";

const firebaseSlice = createSlice({
  name: "firebaseSlice",
  initialState: {
    firebase: firebase,
  },
});

export default firebaseSlice.reducer;
