import { FC } from "react";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import {
  StyledAuthUserModalContainer,
  StyledAuthUserModalLogIn,
  StyledAuthUserModalNitle,
  StyledAuthUserModalRegistration,
  StyledAuthUserModalWrapper,
} from "./AuthUserModal.styled";
import useModalHandler from "../../../hooks/useModalHandler";
import { toast } from "react-toastify";

const AuthUserModal: FC = () => {
  const { handleCloseModal, handleOpenModal } = useModalHandler();

  const openLogInModal = async () => {
    try {
      await handleCloseModal();
      await handleOpenModal("UserSignInModal");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  };

  const openRegistrationModal = async () => {
    try {
      await handleCloseModal();
      await handleOpenModal("UserSignUpModal");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  };
  return (
    <StyledAuthUserModalWrapper>
      <ButtonClose />
      <StyledAuthUserModalNitle>
        Please register or log into the application using your username.
      </StyledAuthUserModalNitle>
      <StyledAuthUserModalContainer>
        <StyledAuthUserModalLogIn type="button" onClick={openLogInModal}>
          Log in
        </StyledAuthUserModalLogIn>
        <StyledAuthUserModalRegistration
          type="button"
          onClick={openRegistrationModal}
        >
          Registration
        </StyledAuthUserModalRegistration>
      </StyledAuthUserModalContainer>
    </StyledAuthUserModalWrapper>
  );
};

export default AuthUserModal;
