import { configureStore } from "@reduxjs/toolkit";
import preferenceReducer from "./preferenceReducer";

export const store = configureStore({
  reducer: {
    pref: preferenceReducer,
  },
});

export * from "./auth";
