import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./apis/api";
import counterReducer from "./features/counterSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger as Middleware, MyLogger), */
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
