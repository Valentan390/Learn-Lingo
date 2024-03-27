import { FC } from "react";
import {
  StyledNavigationNavLink,
  StyledNavigationWrapper,
} from "./Navigation.styled";
import { registered, unregistered } from "../../helpers/ComponentData";

const Navigation: FC = () => {
  const isAuthUser = false;
  return (
    <StyledNavigationWrapper>
      {(isAuthUser ? registered : unregistered).map((link, index) => (
        <StyledNavigationNavLink key={index} to={link.to}>
          {link.text}
        </StyledNavigationNavLink>
      ))}
    </StyledNavigationWrapper>
  );
};

export default Navigation;
