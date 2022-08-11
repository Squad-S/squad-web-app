import { createSlice } from "@reduxjs/toolkit";
import { createOrganization } from "./action";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  status: STATUSES.IDLE,
  data: {},
};

export const createOrganizationSlice = createSlice({
  name: "createOrganization",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(createOrganization.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(createOrganization.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(createOrganization.rejected, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.ERROR;
      });
  },
});

export default createOrganizationSlice.reducer;
