import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/slice";
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
import { teachersReducer } from "./Catalog/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const teachersPersistConfig = {
  key: "teachers",
  storage,
  blacklist: ["teachersCard"],
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  teachers: persistReducer(teachersPersistConfig, teachersReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
