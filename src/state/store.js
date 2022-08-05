import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { createOrganizationSlice } from "./CreateOrganization";

const middlewares = [];

if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  counter: counterReducer,
  createOrganization: createOrganizationSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export default store;
