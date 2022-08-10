import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { createProjectReducer } from "./CreateProject";
import { forgetPasswordReducer } from "./forgetPassword";
import { createOrganizationReducer } from "./CreateOrganization";
import { confirmPasswordReducer } from "./user";
import { logInReducer } from "./LogIn";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  counter: counterReducer,
  project: createProjectReducer,
  forgetPassword: forgetPasswordReducer,
  organization: createOrganizationReducer,
  confirmPassword: confirmPasswordReducer,
  logIn: logInReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export default store;
