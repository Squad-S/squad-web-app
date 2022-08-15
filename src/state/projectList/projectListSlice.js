import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { privateGet } from "../../utilities";

export const fetchProjects = createAsyncThunk(
  "projectList/fetchProjects",
  async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNodXZvIiwidXNlcklkIjoiNjJkZTE3OWMzZGFkNjgyNjk4ZGVhYjQxIiwiaWF0IjoxNjYwMjc1NTMxfQ.o1KAlw-fQhJOogd3-zh_gEpKka9k81rtpPc_THkxzUc";

      const response = await privateGet("project", token);

      // const response = await axios.get(
      //   "https://jsonplaceholder.typicode.com/users"
      // );
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

export const projectListSlice = createSlice({
  name: "projectList",
  initialState: {
    isLoading: false,
    projectList: [
      {
        projectName: "Jira",
        organizationName: "Atlassian",
      },
      {
        projectName: "Google Map",
        organizationName: "Google LLC",
      },
      {
        projectName: "Teams",
        organizationName: "Microsoft Teams",
      },
    ],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projectList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.projectList = [];
      state.error = action.error.message;
    });
  },
});

export default projectListSlice.reducer;
