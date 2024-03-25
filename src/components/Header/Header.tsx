import { FC } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import { StyledHeaderSection, StyledHeaderWrapper } from "./Header.styled";

const Header: FC = () => {
  const isAuthUser: boolean = false;
  return (
    <StyledHeaderSection>
      <StyledHeaderWrapper className="container">
        <Logo />
        <Navigation />
        {isAuthUser ? <UserLogo /> : <UserAuth />}
      </StyledHeaderWrapper>
    </StyledHeaderSection>
  );
};

export default Header;
