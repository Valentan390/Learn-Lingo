import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/modalSlice";
import { userReduser } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    modalInfo: modalReducer,
    user: userReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
