import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeacherData } from "../../helpers/InterfaceData";

interface InitialState {
  openModal: boolean;
  contentModal: string;
  teacherData: TeacherData;
}

const initialState: InitialState = {
  openModal: false,
  contentModal: "",
  teacherData: { avatar_url: "", name: "", surname: "" },
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
    setTeacherData: (state, actin: PayloadAction<TeacherData>) => {
      state.teacherData = actin.payload;
    },
  },
});

export const { setModalContent, setModalOpen, setTeacherData } =
  modalSlise.actions;

export const modalReducer = modalSlise.reducer;
