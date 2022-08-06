import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities";

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

export const createOrganization = createAsyncThunk(
  "organization/create",
  async (organizationName) => {
    const body = {
      name: organizationName,
    };
    return publicPost("organization", body);
  }
);

export default createOrganizationSlice.reducer;
