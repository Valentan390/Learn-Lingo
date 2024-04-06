import { RootState } from "../stor";

export const selectFavoriteTeachers = (state: RootState) =>
  state.favorites.favorite;

export const selectFavoriteError = (state: RootState) => state.favorites.error;

export const selectIsLoadingFavorite = (state: RootState) =>
  state.favorites.isLoadingFavorite;
