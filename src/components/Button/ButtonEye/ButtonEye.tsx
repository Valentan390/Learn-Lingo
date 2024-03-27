import { FC } from "react";
import sprite from "../../../images/svg/sprite.svg";
import { StyledButtonEye, StyledButtonEyeSvg } from "./ButtonEye.styled";

interface ButtonEyeProps {
  passwordVisible: boolean;
  togglePasswordVisibility: () => void;
}

const ButtonEye: FC<ButtonEyeProps> = ({
  passwordVisible,
  togglePasswordVisibility,
}) => {
  return (
    <StyledButtonEye type="button" onClick={togglePasswordVisibility}>
      <StyledButtonEyeSvg>
        <use href={`${sprite}#icon-${passwordVisible ? "eye" : "eye-off"} `} />
      </StyledButtonEyeSvg>
    </StyledButtonEye>
  );
};

export default ButtonEye;
