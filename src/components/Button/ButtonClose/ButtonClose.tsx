import useModalHandler from "../../../hooks/useModalHandler";
import sprite from "../../../images/svg/sprite.svg";
import { StyledButtonClose, StyledButtonCloseSvg } from "./ButtonClose.styled";

const ButtonClose = () => {
  const { handleCloseModal } = useModalHandler();
  return (
    <StyledButtonClose type="button" onClick={handleCloseModal}>
      <StyledButtonCloseSvg>
        <use href={`${sprite}#icon-x`} />
      </StyledButtonCloseSvg>
    </StyledButtonClose>
  );
};

export default ButtonClose;
