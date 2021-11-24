import { configureStore } from "@reduxjs/toolkit";
import { contentApi } from "./services/contentApi";
import filterReducer from "./filterSlice";
import viewReducer from "./viewSlice";

export const store = configureStore({
  reducer: {
    [contentApi.reducerPath]: contentApi.reducer,
    filter: filterReducer,
    views: viewReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentApi.middleware),
});
