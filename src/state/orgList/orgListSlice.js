import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { publicGet } from "../../utilities";

export const fetchOrgs = createAsyncThunk("orgList/fetchOrgs", async () => {
  try {
    // const response = await publicGet("/users");
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
  } catch (err) {
    return err;
  }
});

// export const deleteOrg =  () => {
//   const delResponse = await publicDelete("/users");
// }

export const orgListSlice = createSlice({
  name: "orgList",
  initialState: {
    isLoading: false,
    orgList: [
      {
        organizationName: "Jira",
      },
      {
        organizationName: "Google LLC",
      },
      {
        organizationName: "Microsoft Teams",
      },
    ],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrgs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrgs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orgList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchOrgs.rejected, (state, action) => {
      state.isLoading = false;
      state.orgList = [];
      state.error = action.error.message;
    });
  },
});

export default orgListSlice.reducer;
