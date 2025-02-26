import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormVisible: false,
};

const visibleSlice = createSlice({
  name: "visible",
  initialState,
  reducers: {
    toggleFormVisibility: (state) => {
      state.isFormVisible = !state.isFormVisible;
    },
  },
});

export const { toggleFormVisibility } = visibleSlice.actions;
export default visibleSlice.reducer;