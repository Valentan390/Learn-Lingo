import styled from "styled-components";

export const StyledUserAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: max-content;
`;

export const StyledUserAutButtonSinIn = styled.button`
  display: flex;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  color: var(--black);
  font-size: 16px;
  font-weight: var(--bold);
  line-height: 1.25;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--white);
    background: var(--blue);
  }
`;

export const StyledUserButtonSunUp = styled.button`
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

// export const StyledUserAuthWrapper = styled.``
// export const StyledUserAuthWrapper = styled.``
