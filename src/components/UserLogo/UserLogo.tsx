import useAuthUser from "../../hooks/useAuthUser";
import useModalHandler from "../../hooks/useModalHandler";
import {
  StyledUserLogoButtonLogOut,
  StyledUserLogoUser,
  StyledUserLogoUserName,
  StyledUserLogoWrapper,
} from "./UserLogo.styled";

const UserLogo = () => {
  const { userName } = useAuthUser();
  const { handleOpenModal } = useModalHandler();
  return (
    <StyledUserLogoWrapper>
      <StyledUserLogoUser>{userName[0].toUpperCase()}</StyledUserLogoUser>
      <StyledUserLogoUserName>{userName}</StyledUserLogoUserName>
      <StyledUserLogoButtonLogOut
        type="button"
        onClick={() => handleOpenModal("LogOut")}
      >
        Log out
      </StyledUserLogoButtonLogOut>
    </StyledUserLogoWrapper>
  );
};

export default UserLogo;
