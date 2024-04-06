import { FC } from "react";
import SignUpAndSignInModal from "../Modal/SignUpAndSignInModal/SignUpAndSignInModal";
import useModalHandler from "../../hooks/useModalHandler";
import LogOutModal from "../Modal/LogOutModal/LogOutModal";
import TrialLessonModal from "../Modal/TrialLessonModal/TrialLessonModal";
import AuthUserModal from "../Modal/AuthUserModal/AuthUserModal";

const ModalContent: FC = () => {
  const { contentModal } = useModalHandler();

  switch (contentModal) {
    case "UserSignUpModal":
      return <SignUpAndSignInModal modalType="SignUp" />;
    case "UserSignInModal":
      return <SignUpAndSignInModal modalType="SignIn" />;
    case "LogOut":
      return <LogOutModal />;
    case "TrialLessonModal":
      return <TrialLessonModal />;
    case "AuthUserModal":
      return <AuthUserModal />;
    default:
      return null;
  }
};

export default ModalContent;
