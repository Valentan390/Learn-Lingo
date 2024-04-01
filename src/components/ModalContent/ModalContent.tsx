import { FC } from "react";
import SignUpAndSignInModal from "../Modal/SignUpAndSignInModal/SignUpAndSignInModal";
import useModalHandler from "../../hooks/useModalHandler";
import LogOutModal from "../Modal/LogOutModal/LogOutModal";

const ModalContent: FC = () => {
  const { contentModal } = useModalHandler();

  switch (contentModal) {
    case "UserSignUpModal":
      return <SignUpAndSignInModal modalType="SignUp" />;
    case "UserSignInModal":
      return <SignUpAndSignInModal modalType="SignIn" />;
    case "LogOut":
      return <LogOutModal />;
    default:
      return null;
  }
};

export default ModalContent;
