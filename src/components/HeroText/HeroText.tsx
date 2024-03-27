import { FC } from "react";
import {
  StyledHeroText,
  StyledHeroTextLink,
  StyledHeroTextSpan,
  StyledHeroTextTitle,
  StyledHeroTextWrapper,
} from "./HeroText.styled";
import Icon from "../Icon/Icon";

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
      <StyledHeroTextLink to={"/teachers"}>
        Get started <Icon iconName="icon-Arrow16" width="16px" height="16px" />
      </StyledHeroTextLink>
    </StyledHeroTextWrapper>
  );
};

export default HeroText;
