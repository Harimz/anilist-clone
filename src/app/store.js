import { configureStore } from "@reduxjs/toolkit";
import { anilistApi } from "../services/anilistApi";
import { contentApi } from "./services/contentApi";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    [anilistApi.reducerPath]: anilistApi.reducer,
    [contentApi.reducerPath]: contentApi.reducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(anilistApi.middleware, contentApi.middleware),
});
