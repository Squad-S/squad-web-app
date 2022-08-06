import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { createProjectReducer } from "./CreateProject";
import { confirmPasswordReducer } from "./user";

const middlewares = [];

if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  counter: counterReducer,
  confirmPassword: confirmPasswordReducer,
  project: createProjectReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export default store;
