import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const inviteMemberPrject = createAsyncThunk(
  "project/invite",
  async (member, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://sq-project-service.herokuapp.com/project/invite",
        {
          method: "POST",
          body: JSON.stringify(member),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);

export const inviteMemberPrjectSlice = createSlice({
  name: "signup",

  reducers: {},
  extraReducers: {
    [inviteMemberPrject.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default inviteMemberPrjectSlice.reducer;
