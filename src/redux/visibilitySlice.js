import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    isContentVisible: true,
  },
  reducers: {
    toggleVisibility: (state) => {
      state.isContentVisible = !state.isContentVisible;
    },
  },
});

export const { toggleVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
