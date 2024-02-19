import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
import { userAPI } from "./api/userAPI";

export const store = configureStore({
  reducer: {
    [userReducer.name]: userReducer.reducer,

    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (mid) => mid().concat(userAPI.middleware),
});
