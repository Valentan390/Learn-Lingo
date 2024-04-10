import { RootState } from "../stor";
import { createSelector } from "@reduxjs/toolkit";

export const selectFavoriteTeachers = (state: RootState) =>
  state.favorites.favorite;

export const selectFavoriteError = (state: RootState) => state.favorites.error;

export const selectIsLoadingFavorite = (state: RootState) =>
  state.favorites.isLoadingFavorite;

export const selectFilterFavoriteTeachers = (state: RootState) =>
  state.filterTeachers.filterFavoriteTeachers;

export const getFilterFavoriteTeachers = createSelector(
  [selectFavoriteTeachers, selectFilterFavoriteTeachers],
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
