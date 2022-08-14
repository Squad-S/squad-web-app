import { createAsyncThunk } from "@reduxjs/toolkit";
import { privatePost } from "../../utilities";

export const createProject = createAsyncThunk(
  "project/create",
  async (projectName, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const { token } = state?.logIn?.userLogin || {};
      console.log({ state, token });
      const body = {
        organizationId: "62f93859c72120d9055d0cca",
        projectName: projectName,
      };
      return privatePost("project", token, body);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
