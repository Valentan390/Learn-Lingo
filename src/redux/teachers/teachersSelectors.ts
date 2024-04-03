import { RootState } from "../stor";

export const selectTeachers = (state: RootState) => state.teachers.teachers;

export const selectisLoadingTeachers = (state: RootState) =>
  state.teachers.isLoadingTeachers;

export const selectError = (state: RootState) => state.teachers.error;

export const selectCurrentPage = (state: RootState) =>
  state.teachers.currentPage;
