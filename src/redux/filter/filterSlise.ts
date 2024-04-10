import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterTeachers } from "../../helpers/InterfaceData";
import {
  optionsLanguages,
  optionsLevelKnowledge,
  optionsPrice,
} from "../../helpers/ComponentData";

interface InitialState {
  filterTeachers: FilterTeachers;
  filterFavoriteTeachers: FilterTeachers;
}

const initialState: InitialState = {
  filterTeachers: {
    languages: optionsLanguages[5],
    levelKnowledge: optionsLevelKnowledge[4],
    price: optionsPrice[4],
  },
  filterFavoriteTeachers: {
    languages: optionsLanguages[5],
    levelKnowledge: optionsLevelKnowledge[4],
    price: optionsPrice[4],
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
    setFilterFavoriteTeachers: (
      state,
      action: PayloadAction<FilterTeachers>
    ) => {
      if (action.payload) {
        state.filterFavoriteTeachers = action.payload;
      }
    },
  },
});

export const { setFilterTeachers, setFilterFavoriteTeachers } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
