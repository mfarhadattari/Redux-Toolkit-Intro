import { Middleware, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice from "./features/counterSlice";
import MyLogger from "./middlewares/MyLogger";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger as Middleware, MyLogger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
