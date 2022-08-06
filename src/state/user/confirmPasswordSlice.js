import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../configs";

export const confirmUserPassword = createAsyncThunk(
  "confirmPasswordSlice/confirmPassword",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.patch(`${api}/reset-password`, data, config);
      if (res) {
        return res.data;
      }
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const userConfirmPasswordSlice = createSlice({
  name: "confirmPassword",
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(confirmUserPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(confirmUserPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(confirmUserPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default userConfirmPasswordSlice.reducer;
