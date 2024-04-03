import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operationsTeachers";
import { Teachers } from "../../helpers/InterfaceData";

interface InitialState {
  teachers: Teachers[];
  isLoadingTeachers: boolean;
  error: string | undefined;
  currentPage: number;
}

const initialState: InitialState = {
  teachers: [],
  isLoadingTeachers: false,
  error: "",
  currentPage: 0,
};

const handlePendingAction: CaseReducer<InitialState> = (state) => {
  state.error = "";
  state.isLoadingTeachers = true;
};

const handleRejectedAction: CaseReducer<
  InitialState,
  PayloadAction<string | undefined>
> = (state, action) => {
  state.isLoadingTeachers = false;
  state.error = action.payload;
};

export const teachersSlice = createSlice({
  name: "tiachers",
  initialState,
  reducers: {
    setCurrentPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, handlePendingAction)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoadingTeachers = false;
        state.teachers = [...state.teachers, ...action.payload];
      })
      .addCase(fetchTeachers.rejected, handleRejectedAction);
  },
});

export const { setCurrentPage } = teachersSlice.actions;

export const teachersReduser = teachersSlice.reducer;
