import { configureStore } from "@reduxjs/toolkit";
import charSlice from "./features/charSlice";

export const store = configureStore({
  reducer: {
    char: charSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
