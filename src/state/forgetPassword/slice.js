import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword } from "./action";

const initialState = {
  status: "",
};

export const passwordSlice = createSlice({
  name: "forgetPassword",
  initialState,
  reducers: {},
  extraReducers: {
    [forgotPassword.pending]: (state) => {
      state.status = "pending";
    },
    [forgotPassword.fulfilled]: (state, { payload }) => {
      state.status = "success";
      console.log(payload);
    },
    [forgotPassword.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default passwordSlice.reducer;
