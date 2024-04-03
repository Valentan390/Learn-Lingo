import styled from "styled-components";

export const StyledTeachersReviewsExperience = styled.p`
  color: var(--black);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.5;
`;

export const StyledTeachersReviewsList = styled.ul`
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin: 32px 0;
`;

export const StyledTeachersReviewsItem = styled.li`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

interface StyledTeachersReviewsContainerProps {
  $gap?: string;
}

export const StyledTeachersReviewsContainer = styled.div<StyledTeachersReviewsContainerProps>`
  display: flex;
  gap: ${(props) => (props.$gap ? "8px" : "12px")};
  justify-content: start;
  align-items: center;
  width: max-content;
`;

export const StyledTeachersReviews = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 100px;
  background: var(--yellow);
  color: var(--black);
  font-size: 24px;
  font-weight: var(--medium);
  line-height: 1;
  width: 44px;
  height: 44px;
`;

export const StyledTeachersReviewsRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: start;
  width: max-content;
`;

interface StyledTeachersReviewsPProps {
  $black?: string;
  $rating?: string;
}

export const StyledTeachersReviewsP = styled.p<StyledTeachersReviewsPProps>`
  color: ${(props) => (props.$black ? "var(--black)" : "var(--grey)")};
  font-size: ${(props) => (props.$rating ? "14px" : "16px")};
  font-weight: var(--medium);
  line-height: ${(props) => (props.$rating ? "1.28" : "1.5")};
`;
