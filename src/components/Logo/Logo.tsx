import Icon from "../Icon/Icon";
import { StiledLogoTitle, StyledLogoLink } from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLogoLink to={"/"}>
      <Icon width="28px" height="28px" iconName="icon-ukraine" />
      <StiledLogoTitle>LearnLingo</StiledLogoTitle>
    </StyledLogoLink>
  );
};

export default Logo;
