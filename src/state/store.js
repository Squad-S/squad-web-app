import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { createOrganizationReducer } from "./CreateOrganization";
import { createProjectReducer } from "./CreateProject";
import { forgetPasswordReducer } from "./forgetPassword";
import { inviteListProjectReducer } from "./inviteListProject";
import { confirmPasswordReducer } from "./user";
import { logInReducer } from "./LogIn";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "token",
  storage,
};

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, logInReducer);

const rootReducer = combineReducers({
  counter: counterReducer,
  project: createProjectReducer,
  forgetPassword: forgetPasswordReducer,
  organization: createOrganizationReducer,
  confirmPassword: confirmPasswordReducer,
  projectInviteList: inviteListProjectReducer,
  logIn: persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middlewares),
});

export const persistor = persistStore(store);
