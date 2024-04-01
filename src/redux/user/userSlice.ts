import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  logOutUser,
  refreshUser,
  signInUser,
  signUpUser,
} from "./operationsUser";
import { User } from "../../helpers/InterfaceData";

interface InitialState {
  user: User;
  isLoadingUser: boolean;
  error: string | undefined;
}

const initialState: InitialState = {
  user: {
    userName: "",
    userEmail: "",
    id: "",
    token: "",
  },
  isLoadingUser: false,
  error: "",
};

const handlePendingAction: CaseReducer<InitialState> = (state) => {
  state.isLoadingUser = true;
};

const handleRejectedAction: CaseReducer<
  InitialState,
  PayloadAction<string | undefined>
> = (state, action) => {
  state.isLoadingUser = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, handlePendingAction)
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoadingUser = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, handleRejectedAction)

      .addCase(signInUser.pending, handlePendingAction)
      .addCase(signInUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoadingUser = false;
        state.user = action.payload;
      })
      .addCase(signInUser.rejected, handleRejectedAction)

      .addCase(logOutUser.pending, handlePendingAction)
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = initialState.user;
      })
      .addCase(logOutUser.rejected, handleRejectedAction)

      .addCase(refreshUser.pending, handlePendingAction)
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoadingUser = false;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, handleRejectedAction);
  },
});

export const userReduser = userSlice.reducer;
