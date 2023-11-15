import { configureStore } from "@reduxjs/toolkit";
import { inputSlice } from "./slices/inputSlice";

const store = configureStore({
  reducer: {
    [inputSlice.name]: inputSlice.reducer,
  },
  devTools: true,
});

export { store };
