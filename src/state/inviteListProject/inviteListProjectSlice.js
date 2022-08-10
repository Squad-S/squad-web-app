import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicGet } from "../../utilities";
export const inviteListProject = createAsyncThunk(
  "inviteListProjectSlice/inviteListProject",
  async (projectId) => {
    try {
      const response = await publicGet(`/project/invites/${projectId}`);

      return response.data.invites;
    } catch (e) {
      console.log(e);
    }
  }
);

export const inviteListProjectSlice = createSlice({
  name: "inviteListProject",
  initialState: {
    isLoading: false,
    users: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(inviteListProject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(inviteListProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(inviteListProject.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default inviteListProjectSlice.reducer;
