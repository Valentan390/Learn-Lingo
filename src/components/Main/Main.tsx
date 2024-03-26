import { FC, ReactNode } from "react";
import {
  StyledMain,
  StyledMainSection,
  StyledMainWrapper,
} from "./Main.styled";

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <StyledMain>
      <StyledMainSection>
        <StyledMainWrapper className="container">{children}</StyledMainWrapper>
      </StyledMainSection>
    </StyledMain>
  );
};

export default Main;
