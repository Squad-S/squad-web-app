import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateGet } from "../../utilities";

export const fetchProjects = createAsyncThunk(
  "projectList/fetchProjects",
  async ({ rejectWithValue, getState }) => {
    try {
      const state = getState();
      const { token } = state?.logIn?.userLogin || {};
      const response = await privateGet("project", token);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const projectListSlice = createSlice({
  name: "projectList",
  initialState: {
    isLoading: false,
    projectList: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projectList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.projectList = [];
      state.error = action.error.message;
    });
  },
});

export default projectListSlice.reducer;
