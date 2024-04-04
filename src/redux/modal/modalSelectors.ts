import { RootState } from "../stor";

export const selectOpenModal = (state: RootState) => state.modalInfo.openModal;

export const selectContentModal = (state: RootState) =>
  state.modalInfo.contentModal;

export const selectTeacherData = (state: RootState) =>
  state.modalInfo.teacherData;
