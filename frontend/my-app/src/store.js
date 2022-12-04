import { configureStore } from '@reduxjs/toolkit';
import bookReducer from "./redux/bookSlice";
import createInstanceReducer from "./redux/createSlice";

export const store = configureStore({
  reducer: {
      book: bookReducer,
      create : createInstanceReducer
  },
})

