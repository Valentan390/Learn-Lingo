import { FC } from "react";
import {
  StyledNavigationNavLink,
  StyledNavigationWrapper,
} from "./Navigation.styled";
import { registered, unregistered } from "../../helpers/ComponentData";
import useAuthUser from "../../hooks/useAuthUser";

const Navigation: FC = () => {
  const { isAuthUser } = useAuthUser();
  const linksToShow = isAuthUser ? registered : unregistered;
  return (
    <StyledNavigationWrapper>
      {linksToShow.map((link, index) => (
        <StyledNavigationNavLink key={index} to={link.to}>
          {link.text}
        </StyledNavigationNavLink>
      ))}
    </StyledNavigationWrapper>
  );
};

export default Navigation;
