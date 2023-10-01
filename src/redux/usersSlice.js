import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch('http://localhost:3000/community');
    if (!response.ok) {
      throw new Error('Failed to fetch community members.');
    }
    return response.json();
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default usersSlice.reducer;
