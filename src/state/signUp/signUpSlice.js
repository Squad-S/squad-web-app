import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createSignUp = createAsyncThunk(
  "user/signup",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/user/signup",
        {
          method: "POST",
          body: JSON.stringify(user),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue("Opps there seems to be an error");
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
