import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { MMKV } from "react-native-mmkv";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  Storage,
  persistReducer,
  persistStore,
} from "redux-persist";
import { api } from "../Services/api";
import { authSlice } from "./Slices/Auth";

const reducers = combineReducers({
  auth: authSlice.reducer,
  [api.reducerPath]: api.reducer,
});

const storage = new MMKV();
export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "root",
  storage: reduxStorage,
  whitelist: ["theme", "auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require("redux-flipper").default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
export type RootState = ReturnType<typeof persistedReducer>;
