import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { privatePost } from "../../utilities";
export const fetchUserData = createAsyncThunk(
  "userLogin/fetchUserData",
  async (data, { rejectWithValue }) => {
    try {
      const res = await privatePost("/signin", data);
      if (res) {
        return res.data;
      }
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    isLoading: false,
    userLogin: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userLogin = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.userLogin = [];
      state.error = action.error.message;
    });
  },
});

export const { increment, decrement } = userLoginSlice.actions;

export default userLoginSlice.reducer;
