import { createSlice } from "@reduxjs/toolkit";
import { createProject } from "./action";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  status: STATUSES.IDLE,
  data: {},
};

export const createProjectSlice = createSlice({
  name: "createProject",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(createProject.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(createProject.rejected, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.error;
      });
  },
});

export default createProjectSlice.reducer;
