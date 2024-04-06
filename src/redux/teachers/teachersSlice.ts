import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operationsTeachers";
import { Teachers } from "../../helpers/InterfaceData";
import { nanoid } from "nanoid";

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

const handleFulfilledAction: CaseReducer<
  InitialState,
  PayloadAction<Teachers[]>
> = (state, action: PayloadAction<Teachers[]>) => {
  state.isLoadingTeachers = false;
  const teachersWithIds = action.payload.map((teacher) => ({
    ...teacher,
    id: nanoid(),
  }));
  state.teachers = [...state.teachers, ...teachersWithIds];
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
      .addCase(fetchTeachers.fulfilled, handleFulfilledAction)
      .addCase(fetchTeachers.rejected, handleRejectedAction);
  },
});

export const { setCurrentPage } = teachersSlice.actions;

export const teachersReduser = teachersSlice.reducer;
