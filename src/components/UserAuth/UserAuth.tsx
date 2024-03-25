import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledUserAutButtonSinIn,
  StyledUserAuthWrapper,
  StyledUserButtonSunUp,
} from "./UserAuth.styled";

const UserAuth: FC = () => {
  return (
    <StyledUserAuthWrapper>
      <StyledUserAutButtonSinIn type="button">
        <Icon width="20px" height="20px" iconName="icon-log-in-01" />
        Log in
      </StyledUserAutButtonSinIn>

      <StyledUserButtonSunUp type="button">Registration</StyledUserButtonSunUp>
    </StyledUserAuthWrapper>
  );
};

export default UserAuth;
