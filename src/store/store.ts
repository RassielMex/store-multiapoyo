import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/login-slice";
// ...

export const store = configureStore({
  reducer: {
    login: LoginSlice,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
