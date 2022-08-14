import { createAsyncThunk } from "@reduxjs/toolkit";
import { privatePost } from "../../utilities";

export const createOrganization = createAsyncThunk(
  "organization/create",
  async (organizationName, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const { token } = state?.logIn?.userLogin || {};
      const body = {
        name: organizationName,
      };
      return privatePost("organization", token, body);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
