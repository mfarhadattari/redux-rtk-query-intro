import { configureStore } from "@reduxjs/toolkit";
import postAPI from "./features/postAPI";

const store = configureStore({
  reducer: {
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});

export default store;
