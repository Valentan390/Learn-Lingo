import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigationWrapper = styled.nav`
  display: flex;
  gap: 28px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledNavigationNavLink = styled(NavLink)`
  color: var(--black);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
  position: relative;

  &.active::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 2px;
    background-color: var(--yellow);
    border-radius: 2px;
    animation: expandLine 0.3s linear forwards;
  }

  @keyframes expandLine {
    from {
      width: 2px;
    }
    to {
      width: 100%;
    }
  }
`;
