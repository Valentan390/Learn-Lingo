import { RootState } from "../stor";

export const selectFilterTeachers = (state: RootState) =>
  state.filterTeachers.filterTeachers;

export const selectFilterFavoriteTeachers = (state: RootState) =>
  state.filterTeachers.filterFavoriteTeachers;
