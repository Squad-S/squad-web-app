import { createSlice } from "@reduxjs/toolkit";
import { fetchOrgs } from "./action";

const initialState = {
  orgList: [],
  status: "initial",
};

const orgListSlice = createSlice({
  name: "orgListReducer",
  initialState,
  extraReducers: {
    [fetchOrgs.pending]: (state, action) => ({
      ...state,
      status: "pending",
    }),

    [fetchOrgs.fulfilled]: (state, action) => ({
      ...state,
      orgList: action.payload,
      status: "success",
    }),

    [fetchOrgs.rejected]: (state, action) => ({
      ...state,
      status: "status error",
    }),
  },
});

export default orgListSlice.reducer;
