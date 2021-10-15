import { configureStore } from "@reduxjs/toolkit";
import { anilistApi } from "../services/anilistApi";

export const store = configureStore({
  reducer: {
    [anilistApi.reducerPath]: anilistApi.reducer,
  },
});
