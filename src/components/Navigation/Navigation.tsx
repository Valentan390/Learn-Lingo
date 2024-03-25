import { FC } from "react";
import {
  StyledNavigationNavLink,
  StyledNavigationWrapper,
} from "./Navigation.styled";

const Navigation: FC = () => {
  const unregistered = [
    { to: "/", text: "Home" },
    { to: "/teachers", text: "Teachers" },
  ];

  const registered = [
    { to: "/", text: "Home" },
    { to: "/teachers", text: "Teachers" },
    { to: "/favorites", text: "Favorites" },
  ];

  const isAuthUser = true;
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
