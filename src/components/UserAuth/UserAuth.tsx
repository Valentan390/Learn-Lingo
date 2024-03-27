import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledUserAutButtonSinIn,
  StyledUserAuthWrapper,
  StyledUserButtonSunUp,
} from "./UserAuth.styled";
import useModalHandler from "../../hooks/useModalHandler";

const UserAuth: FC = () => {
  const { handleOpenModal } = useModalHandler();
  return (
    <StyledUserAuthWrapper>
      <StyledUserAutButtonSinIn
        type="button"
        onClick={() => handleOpenModal("UserSignInModal")}
      >
        <Icon width="20px" height="20px" iconName="icon-log-in-01" />
        Log in
      </StyledUserAutButtonSinIn>

      <StyledUserButtonSunUp
        type="button"
        onClick={() => handleOpenModal("UserSignUpModal")}
      >
        Registration
      </StyledUserButtonSunUp>
    </StyledUserAuthWrapper>
  );
};

export default UserAuth;
