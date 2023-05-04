import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      // state.value = state.value + action.step;
      state.value = state.value + action.payload;
    },
  },
});

export const { up } = counterSlice.actions;

export default counterSlice;
