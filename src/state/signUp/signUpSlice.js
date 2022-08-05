import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";

export const createSignUp = createAsyncThunk(
  "user/signup",
  async (user, { rejectWithValue }) => {
    try {
      const response = await publicPost("/user/signup", user);
      if (response) {
        return response.data;
      }
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue(err);
    }
  }
);

export const signUpSlice = createSlice({
  name: "signup",

  reducers: {},
  extraReducers: {
    [createSignUp.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default signUpSlice.reducer;
