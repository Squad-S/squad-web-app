import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";
export const inviteMemberPrject = createAsyncThunk(
  "project/invite",
  async (member, { rejectWithValue }) => {
    try {
      const response = await publicPost("/project/invite", member);
      if (response) {
        return response.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const inviteMemberProjectSlice = createSlice({
  name: "signup",

  reducers: {},
  extraReducers: {
    [inviteMemberPrject.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default inviteMemberProjectSlice.reducer;
