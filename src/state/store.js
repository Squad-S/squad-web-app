import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { createOrganizationReducer } from "./CreateOrganization";

const middlewares = [];

if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  counter: counterReducer,
  organization: createOrganizationReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export default store;
