import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import imagesSlice from "./slice/images.slice";

const store = configureStore({
  reducer : persistReducer(config,slices),
  devTools: true,
});

export default store