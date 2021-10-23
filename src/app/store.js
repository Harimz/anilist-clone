import { configureStore } from "@reduxjs/toolkit";
import { anilistApi } from "../services/anilistApi";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    [anilistApi.reducerPath]: anilistApi.reducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(anilistApi.middleware),
});
