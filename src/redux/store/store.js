import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slice/themeSlice";
import authSlice from "../slice/authSlice";
import postSlice from "../slice/postSlice";

const store = configureStore({
  reducer: {
    themeReducer: themeSlice,
    authReducer: authSlice,
    postReduer: postSlice,
  },
});

export default store;
