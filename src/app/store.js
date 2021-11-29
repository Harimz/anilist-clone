import { configureStore } from "@reduxjs/toolkit";
import { contentApi } from "./services/contentApi";
import filterReducer from "./filterSlice";
import viewReducer from "./viewSlice";
import userReducer from "./userSlice";
import { userApi } from "./services/userApi";

export const store = configureStore({
  reducer: {
    [contentApi.reducerPath]: contentApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    filter: filterReducer,
    views: viewReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentApi.middleware, userApi.middleware),
});
