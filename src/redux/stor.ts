import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/modalSlice";
import { userReduser } from "./user/userSlice";
import { teachersReduser } from "./teachers/teachersSlice";

export const store = configureStore({
  reducer: {
    modalInfo: modalReducer,
    user: userReduser,
    teachers: teachersReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
