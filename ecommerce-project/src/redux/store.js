import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./slice/images.slice";

const store = configureStore({
  reducer : {
    imagesSlice,
  },
  devTools: true,
});

export default store