import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities";

export const createProject = createAsyncThunk(
  "project/create",
  async (projectName) => {
    const body = {
      name: projectName,
      organizationId: "62e7974d189b145e0daf9466",
      status: "active",
    };
    return publicPost("project", body);
  }
);
