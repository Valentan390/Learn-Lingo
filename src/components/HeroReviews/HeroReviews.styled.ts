import styled from "styled-components";

export const StyledHeroReviewsWrapper = styled.div`
  padding: 40px 122px;
  border-radius: 30px;
  border: 1.5px dashed var(--yellow);
  width: 100%;
`;

export const StyledHeroReviewsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const StyledHeroReviewsItem = styled.li`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;
  width: max-content;
  flex-wrap: wrap;
`;

export const StyledHeroReviewsQuantity = styled.p`
  color: var(--black);
  font-size: 28px;
  font-weight: var(--medium);
  line-height: 1.14;
  letter-spacing: -0.56px;
`;

export const StyledHeroReviewsText = styled.p`
  color: rgba(18, 20, 23, 0.7);
  font-size: 14px;
  font-weight: var(--regular);
  line-height: 1.28;
  letter-spacing: -0.28px;
`;
