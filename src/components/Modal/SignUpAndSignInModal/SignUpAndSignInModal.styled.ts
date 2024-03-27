import styled from "styled-components";

export const StyledAuthModalWrapper = styled.div`
  width: 566px;
  padding: 64px;
  border-radius: 30px;
  background: var(--white);
  position: relative;
`;

export const StyledAuthModalTitle = styled.h3`
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const StyledAuthModalText = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.37;
  margin-bottom: 40px;
`;

export const StyledAuthModalForm = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

export const StyledAuthModalButton = styled.button`
  display: flex;
  width: 100%;
  padding: 16px 168px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--yellow);
  color: var(--black);
  font-size: 18px;
  font-weight: var(--bold);
  line-height: 1.55;
  transition: var(--transition);
  margin-top: 20px;

  &:hover,
  &:focus {
    color: var(--white);
    background: var(--blue);
  }
`;
