import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
