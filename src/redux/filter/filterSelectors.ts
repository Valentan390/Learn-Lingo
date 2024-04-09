import { RootState } from "../stor";

export const selectFilterTeachers = (state: RootState) =>
  state.filterTeachers.filterTeachers;
