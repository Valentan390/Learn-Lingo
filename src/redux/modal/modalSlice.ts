import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
  contentModal: "",
};

const modalSlise = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen: (state, actin: PayloadAction<boolean>) => {
      state.openModal = actin.payload;
    },
    setModalContent: (state, actin: PayloadAction<string>) => {
      state.contentModal = actin.payload;
    },
  },
});

export const { setModalContent, setModalOpen } = modalSlise.actions;

export const modalReducer = modalSlise.reducer;
