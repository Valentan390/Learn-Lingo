import {
  selectContentModal,
  selectOpenModal,
} from "../redux/modal/modalSelectors";
import { setModalContent, setModalOpen } from "../redux/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "./useReduxHooks";

const useModalHandler = () => {
  const openModal = useAppSelector(selectOpenModal);
  const contentModal = useAppSelector(selectContentModal);
  const dispatch = useAppDispatch();

  const handleCloseModal: () => void = () => {
    dispatch(setModalOpen(false));
    dispatch(setModalContent(""));
  };

  const handleOpenModal = (modalContent: string) => {
    dispatch(setModalOpen(true));
    dispatch(setModalContent(modalContent));
  };
  return { openModal, contentModal, handleCloseModal, handleOpenModal };
};

export default useModalHandler;
