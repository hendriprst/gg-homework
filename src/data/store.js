import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlicer";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export default store;