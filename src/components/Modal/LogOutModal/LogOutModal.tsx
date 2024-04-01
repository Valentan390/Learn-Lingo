import { FC } from "react";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import {
  StyledLogoUtModalCancel,
  StyledLogoUtModalCantainer,
  StyledLogoUtModalLogOut,
  StyledLogoUtModalTitle,
  StyledLogoUtModalWrapper,
} from "./LogOutModal.styled";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import useModalHandler from "../../../hooks/useModalHandler";
import { toast } from "react-toastify";
import { logOutUser } from "../../../redux/user/operationsUser";

const LogOutModal: FC = () => {
  const dispatch = useAppDispatch();
  const { handleCloseModal } = useModalHandler();

  const toggleLogoutModal = async () => {
    try {
      await dispatch(logOutUser());
      handleCloseModal();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  };

  return (
    <StyledLogoUtModalWrapper>
      <ButtonClose />
      <StyledLogoUtModalTitle>
        Do you really want to leave?
      </StyledLogoUtModalTitle>
      <StyledLogoUtModalCantainer>
        <StyledLogoUtModalCancel type="button" onClick={handleCloseModal}>
          Cancel
        </StyledLogoUtModalCancel>
        <StyledLogoUtModalLogOut type="button" onClick={toggleLogoutModal}>
          Log Out
        </StyledLogoUtModalLogOut>
      </StyledLogoUtModalCantainer>
    </StyledLogoUtModalWrapper>
  );
};

export default LogOutModal;
