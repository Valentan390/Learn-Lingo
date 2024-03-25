import styled from "styled-components";

export const StyledUserLogoWrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledUserLogoUser = styled.p`
  display: flex;
  //   gap: 28px;
  justify-content: center;
  align-items: center;
  //   width: max-content;
  padding: 12px 16px;
  background: var(--yellow);
  border-radius: 50%;
  color: var(--black);
  font-size: 16px;
  font-weight: var(--bold);
  line-height: 1.25;
`;

export const StyledUserLogoUserName = styled.p`
  color: var(--black);
  font-size: 16px;
  font-weight: var(--bold);
  line-height: 1.25;
`;

export const StyledUserLogoButtonLogOut = styled.button`
  display: flex;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: var(--black);
  color: var(--white);
  font-size: 16px;
  font-weight: var(--bold);
  line-height: 1.25;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--black);
    background: var(--yellow);
  }
`;
