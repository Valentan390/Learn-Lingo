import { RootState } from "../stor";

export const selectUser = (state: RootState) => state.user.user;

export const selectIsLoadingUser = (state: RootState) =>
  state.user.isLoadingUser;

export const selectErrorUser = (state: RootState) => state.user.error;
