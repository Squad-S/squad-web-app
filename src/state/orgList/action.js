import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { privateGet } from "../../utilities";

export const fetchOrgs = createAsyncThunk("orgList/fetchOrgs", async () => {
  try {
    const response = await privateGet(
      "/organization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNodXZvIiwidXNlcklkIjoiNjJkZTE3OWMzZGFkNjgyNjk4ZGVhYjQxIiwiaWF0IjoxNjYwMjc1NTMxfQ.o1KAlw-fQhJOogd3-zh_gEpKka9k81rtpPc_THkxzUc"
    );

    return response.data.data;
  } catch (err) {
    return err;
  }
});
