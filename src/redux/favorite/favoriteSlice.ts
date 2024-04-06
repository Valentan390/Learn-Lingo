import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Teachers } from "../../helpers/InterfaceData";
import {
  addFavoriteTeachers,
  deleteFaforiteTeachers,
  getFavoriteTeachers,
} from "./operationsFavorite";

interface InitialState {
  favorite: Teachers[];
  isLoadingFavorite: boolean;
  error: string | undefined;
}

const initialState: InitialState = {
  favorite: [],
  isLoadingFavorite: false,
  error: "",
};

const handlePendingAction: CaseReducer<InitialState> = (state) => {
  state.isLoadingFavorite = true;
  state.error = "";
};

const handleRejectedAction: CaseReducer<
  InitialState,
  PayloadAction<string | undefined>
> = (state, action) => {
  state.isLoadingFavorite = false;
  state.error = action.payload;
};

const fovoriteSlice = createSlice({
  name: "favoriteTeachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFavoriteTeachers.pending, handlePendingAction)
      .addCase(
        addFavoriteTeachers.fulfilled,
        (state, action: PayloadAction<Teachers>) => {
          state.isLoadingFavorite = false;
          state.favorite.push(action.payload);
        }
      )
      .addCase(addFavoriteTeachers.rejected, handleRejectedAction)

      .addCase(deleteFaforiteTeachers.pending, handlePendingAction)
      .addCase(
        deleteFaforiteTeachers.fulfilled,
        (state, action: PayloadAction<Teachers>) => {
          state.isLoadingFavorite = false;
          state.favorite = state.favorite.filter(
            (teacher) => teacher.name !== action.payload.name
          );
        }
      )
      .addCase(deleteFaforiteTeachers.rejected, handleRejectedAction)

      .addCase(getFavoriteTeachers.pending, handlePendingAction)
      .addCase(
        getFavoriteTeachers.fulfilled,
        (state, action: PayloadAction<Teachers[]>) => {
          state.isLoadingFavorite = false;
          state.favorite = action.payload;
        }
      )
      .addCase(getFavoriteTeachers.rejected, handleRejectedAction);
  },
});

export const favoriteReduser = fovoriteSlice.reducer;
