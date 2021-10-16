import { configureStore } from "@reduxjs/toolkit";
import { anilistApi } from "../services/anilistApi";
import firebaseReducer from "./firebaseSlice";

export const store = configureStore({
  reducer: {
    [anilistApi.reducerPath]: anilistApi.reducer,
    firebase: firebaseReducer,
  },
});
