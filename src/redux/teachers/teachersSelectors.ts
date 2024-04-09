import { RootState } from "../stor";
import { createSelector } from "@reduxjs/toolkit";

export const selectTeachers = (state: RootState) => state.teachers.teachers;

export const selectisLoadingTeachers = (state: RootState) =>
  state.teachers.isLoadingTeachers;

export const selectError = (state: RootState) => state.teachers.error;

export const selectCurrentPage = (state: RootState) =>
  state.teachers.currentPage;

export const selectFilterTeachers = (state: RootState) =>
  state.filterTeachers.filterTeachers;

export const getFilterTeachers = createSelector(
  [selectTeachers, selectFilterTeachers],
  (teachers, filter) => {
    return teachers.filter((teacher) => {
      if (
        filter.price &&
        filter.price.length > 0 &&
        teacher.price_per_hour < Number(filter.price)
      ) {
        return false;
      }
      if (
        filter.languages &&
        filter.languages.length > 0 &&
        teacher.languages.indexOf(filter.languages) === -1
      ) {
        return false;
      }
      if (
        filter.levelKnowledge &&
        filter.levelKnowledge.length > 0 &&
        teacher.levels.indexOf(filter.levelKnowledge) === -1
      ) {
        return false;
      }
      return true;
    });
  }
);
