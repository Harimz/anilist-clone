import { configureStore } from "@reduxjs/toolkit";
import { contentApi } from "./services/contentApi";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    [contentApi.reducerPath]: contentApi.reducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentApi.middleware),
});
