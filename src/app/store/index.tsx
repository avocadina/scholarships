import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./reducer/navigaiton.slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      nav: navSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
  });

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
