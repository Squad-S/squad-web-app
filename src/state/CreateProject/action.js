import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities";

export const createProject = createAsyncThunk(
  "project/create",
  async (projectName) => {
    const body = {
      organization: "",
      name: projectName,
    };
    return publicPost("project", body);
  }
);
