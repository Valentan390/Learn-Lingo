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
      const { languages, levelKnowledge, price } = filter;
      if (
        price.value &&
        price.value.length > 0 &&
        teacher.price_per_hour < Number(price.value)
      ) {
        return false;
      }
      if (
        languages.value &&
        languages.value.length > 0 &&
        teacher.languages.indexOf(languages.value) === -1
      ) {
        return false;
      }
      if (
        levelKnowledge.value &&
        levelKnowledge.value.length > 0 &&
        teacher.levels.indexOf(levelKnowledge.value) === -1
      ) {
        return false;
      }
      return true;
    });
  }
);
