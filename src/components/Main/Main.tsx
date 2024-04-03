import { FC, ReactNode } from "react";
import {
  StyledMain,
  StyledMainSection,
  StyledMainWrapper,
} from "./Main.styled";
import { useLocation } from "react-router-dom";

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <StyledMain>
      <StyledMainSection $padd={pathname === "/" ? undefined : "32px"}>
        <StyledMainWrapper
          className="container"
          $disp={pathname === "/" ? "flex" : undefined}
        >
          {children}
        </StyledMainWrapper>
      </StyledMainSection>
    </StyledMain>
  );
};

export default Main;
