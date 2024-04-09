import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterTeachers } from "../../helpers/InterfaceData";

interface InitialState {
  filterTeachers: FilterTeachers;
}

const initialState: InitialState = {
  filterTeachers: {
    languages: "",
    levelKnowledge: "",
    price: "",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterTeachers: (state, action: PayloadAction<FilterTeachers>) => {
      if (action.payload) {
        state.filterTeachers = action.payload;
      }
    },
  },
});

export const { setFilterTeachers } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
