import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { createOrganizationReducer } from "./CreateOrganization";
import { createProjectReducer } from "./CreateProject";
import { forgetPasswordReducer } from "./forgetPassword";
import { inviteListProjectReducer } from "./inviteListProject";
import { confirmPasswordReducer } from "./user";
import { logInReducer } from "./LogIn";
import { orgListReducer } from "./orgList";

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
  projectInviteList: inviteListProjectReducer,
  logIn: logInReducer,
  orgList: orgListReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export default store;
