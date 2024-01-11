import { Middleware } from "@reduxjs/toolkit";

const MyLogger: Middleware = (state) => (next) => (action) => {
  console.log("Current State => ", state.getState());
  console.log("Action => ", action);
  next(action);
  console.log("New State => ", state.getState());
};

export default MyLogger;
