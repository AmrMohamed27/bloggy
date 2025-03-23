// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import layoutReducer from "./layoutSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    layoutState: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
