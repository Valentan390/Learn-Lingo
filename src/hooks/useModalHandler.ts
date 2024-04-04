import { TeacherData } from "../helpers/InterfaceData";
import {
  selectContentModal,
  selectOpenModal,
  selectTeacherData,
} from "../redux/modal/modalSelectors";
import {
  setModalContent,
  setModalOpen,
  setTeacherData,
} from "../redux/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "./useReduxHooks";

const useModalHandler = () => {
  const openModal = useAppSelector(selectOpenModal);
  const contentModal = useAppSelector(selectContentModal);
  const teacherData = useAppSelector(selectTeacherData);
  const dispatch = useAppDispatch();

  const handleCloseModal: () => void = () => {
    dispatch(setModalOpen(false));
    dispatch(setModalContent(""));
  };

  const handleOpenModal = (modalContent: string, teacherData?: TeacherData) => {
    if (teacherData) {
      dispatch(setTeacherData(teacherData));
    }
    dispatch(setModalOpen(true));
    dispatch(setModalContent(modalContent));
  };
  return {
    openModal,
    contentModal,
    handleCloseModal,
    handleOpenModal,
    teacherData,
  };
};

export default useModalHandler;
