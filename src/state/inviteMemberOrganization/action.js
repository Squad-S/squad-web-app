import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities";

export const inviteMemberOrganization = createAsyncThunk(
  "organization/invite",
  async (email) => {
    const body = {
      email,
    };
    return publicPost("organization/invite", body);
  }
);
