import styled from "styled-components";

export const StyledTeachersListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: start;
  align-items: start;
`;
export const StyledTeachersListLoadMore = styled.button`
  display: block;
  padding: 16px 48px;
  border-radius: 12px;
  background: var(--yellow);
  color: var(--black);
  font-size: 18px;
  font-weight: var(--medium);
  line-height: 1.55;
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--blue);
    color: var(--white);
  }
`;
