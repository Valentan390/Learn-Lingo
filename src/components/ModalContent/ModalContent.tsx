import { FC } from "react";
import SignUpAndSignInModal from "../Modal/SignUpAndSignInModal/SignUpAndSignInModal";
import useModalHandler from "../../hooks/useModalHandler";

const ModalContent: FC = () => {
  const { contentModal } = useModalHandler();

  switch (contentModal) {
    case "UserSignUpModal":
      return <SignUpAndSignInModal modalType="SignUp" />;
    case "UserSignInModal":
      return <SignUpAndSignInModal modalType="SignIn" />;
    default:
      return null;
  }
};

export default ModalContent;
