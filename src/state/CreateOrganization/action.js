import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities";

export const createOrganization = createAsyncThunk(
  "organization/create",
  async (organizationName) => {
    const body = {
      name: organizationName,
    };
    return publicPost("organization", body);
  }
);
