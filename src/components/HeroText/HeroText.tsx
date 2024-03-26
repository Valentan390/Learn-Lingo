import { FC } from "react";
import {
  StyledHeroText,
  StyledHeroTextLink,
  StyledHeroTextSpan,
  StyledHeroTextTitle,
  StyledHeroTextWrapper,
} from "./HeroText.styled";

const HeroText: FC = () => {
  return (
    <StyledHeroTextWrapper>
      <StyledHeroTextTitle>
        Unlock your potential with the best{" "}
        <StyledHeroTextSpan>language</StyledHeroTextSpan> tutors
      </StyledHeroTextTitle>
      <StyledHeroText>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </StyledHeroText>
      <StyledHeroTextLink to={"/teachers"}>Get started</StyledHeroTextLink>
    </StyledHeroTextWrapper>
  );
};

export default HeroText;
