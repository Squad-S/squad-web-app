import { createAsyncThunk } from "@reduxjs/toolkit";
import { privatePost } from "../../utilities";

const token = "Cann't understand how to get token and userId";
export const createOrganization = createAsyncThunk(
  "organization/create",
  async (organizationName) => {
    const body = {
      name: organizationName,
    };
    return privatePost("organization", token, body);
  }
);
