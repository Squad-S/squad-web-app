import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";

export const forgotPassword = createAsyncThunk(
  "forgotPassword/fetchPassword",
  async (email) => {
    const response = await publicPost("forgot-password", email);
    if (response) {
      return response.data;
    }
  }
);
