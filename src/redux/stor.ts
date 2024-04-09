import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/modalSlice";
import { userReduser } from "./user/userSlice";
import { teachersReduser } from "./teachers/teachersSlice";
import { favoriteReduser } from "./favorite/favoriteSlice";
import { filterReducer } from "./filter/filterSlise";

export const store = configureStore({
  reducer: {
    modalInfo: modalReducer,
    user: userReduser,
    teachers: teachersReduser,
    favorites: favoriteReduser,
    filterTeachers: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
