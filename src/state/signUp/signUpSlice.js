import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";

export const createSignUp = createAsyncThunk(
  "/signup",
  async (user, { rejectWithValue }) => {
    try {
      console.log(user);
      const response = await publicPost("/signup", user);

      if (response) {
        console.log(response);
        return response.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    isLoading: false,
    success: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(createSignUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(createSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default signUpSlice.reducer;
