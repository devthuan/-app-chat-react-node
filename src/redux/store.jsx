import { configureStore } from "@reduxjs/toolkit";
import friendSlice from "./friendSlice";
import messageSlice from "./messageSlice";

export const store = configureStore({
  reducer: {
    friends: friendSlice,
    messages: messageSlice,
  },
});
