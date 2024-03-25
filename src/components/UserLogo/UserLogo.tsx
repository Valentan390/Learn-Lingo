import {
  StyledUserLogoButtonLogOut,
  StyledUserLogoUser,
  StyledUserLogoUserName,
  StyledUserLogoWrapper,
} from "./UserLogo.styled";

const UserLogo = () => {
  const userName = "Valentyn";
  return (
    <StyledUserLogoWrapper>
      <StyledUserLogoUser>{userName[0].toUpperCase()}</StyledUserLogoUser>
      <StyledUserLogoUserName>{userName}</StyledUserLogoUserName>
      <StyledUserLogoButtonLogOut type="button">
        Log out
      </StyledUserLogoButtonLogOut>
    </StyledUserLogoWrapper>
  );
};

export default UserLogo;
