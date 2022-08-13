import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { publicGet } from "../../utilities";

export const fetchOrgs = createAsyncThunk("orgList/fetchOrgs", async () => {
  try {
    const response = await publicGet("/organization");
    return response.data;
  } catch (err) {
    return err;
  }
});

export const orgListSlice = createSlice({
  name: "orgList",
  initialState: {
    isLoading: false,
    orgList: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrgs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrgs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orgList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchOrgs.rejected, (state, action) => {
      state.isLoading = false;
      state.orgList = [];
      state.error = action.error.message;
    });
  },
});

export default orgListSlice.reducer;
