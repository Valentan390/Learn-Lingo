import { FC } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import { StyledHeaderSection, StyledHeaderWrapper } from "./Header.styled";
import useAuthUser from "../../hooks/useAuthUser";

const Header: FC = () => {
  const { isAuthUser } = useAuthUser();
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
