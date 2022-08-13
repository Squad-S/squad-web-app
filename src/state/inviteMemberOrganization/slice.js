import { createSlice } from "@reduxjs/toolkit";
import { inviteMemberOrganization } from "./action";

const STATUS = Object.freeze({
  PENDNG: "pending",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
});

const initialState = {
  status: STATUS.PENDNG,
  data: {},
};

export const inviteMemberOrganizationSlice = createSlice({
  name: "inviteMemberOrganization",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(inviteMemberOrganization.pending, (state, action) => {
        state.status = STATUS.PENDNG;
      })
      .addCase(inviteMemberOrganization.accepted, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.ACCEPTED;
      })
      .addCase(inviteMemberOrganization.rejected, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.REJECTED;
      });
  },
});

export default inviteMemberOrganizationSlice.reducer;
