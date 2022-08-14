import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../configs";
import { privatePut } from "../../utilities";
export const updateInviteProject = createAsyncThunk(
  "updateInviteProjectSlice/updateInviteProject",
  async (data, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const { token } = state?.logIn?.userLogin || {};
      const response = await privatePut(
        `${api}/project/invite/${data.inviteId}`,
        token,
        data
      );
      return response;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const updateInviteProjectSlice = createSlice({
  name: "updateInviteProject",
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(updateInviteProject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateInviteProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateInviteProject.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default updateInviteProjectSlice.reducer;
