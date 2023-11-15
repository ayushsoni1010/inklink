import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  id: "1",
  value: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputHandler: (state, action) => {
      state.id = nanoid();
      state.value = action.payload;
    },
  },
});

export const { inputHandler } = inputSlice.actions;
export default inputSlice.reducer;
