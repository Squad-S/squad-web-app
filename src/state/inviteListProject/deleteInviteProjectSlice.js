import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../configs";
export const deleteInviteProject = createAsyncThunk(
  "deleteInviteProjectSlice/deleteInviteProject",
  async ({ inviteId }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.delete(
        `${api}/project/invite/${inviteId}/`,
        config
      );
      return response;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const deleteInviteProjectSlice = createSlice({
  name: "deleteInviteProject",
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteInviteProject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteInviteProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(deleteInviteProject.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default deleteInviteProjectSlice.reducer;
