import styled from "styled-components";

export const StyledTrialLessonWrapper = styled.div`
  width: 600px;
  padding: 64px;
  border-radius: 30px;
  background: var(--white);
  position: relative;
`;

export const StyledTrialLessonTitle = styled.h2`
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const StyledTrialLessonDescription = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.37;
  margin-bottom: 20px;
`;

export const StyledTrialLessonContainer = styled.div`
  display: flex;
  gap: 14px;
  justify-content: start;
  align-items: center;
  width: max-content;
  margin-bottom: 40px;
`;

export const StyledTrialLessonImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
`;

export const StyledTrialLessonYour = styled.p`
  color: var(--grey);
  font-size: 14px;
  font-weight: var(--medium);
  line-height: 1.33;
`;
export const StyledTrialLessonName = styled.span`
  color: var(--black);
  font-size: 18px;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledTrialLessonReason = styled.h3`
  font-size: 24px;
  font-weight: var(--medium);
  line-height: 1.33;
  margin-bottom: 20px;
`;

export const StyledTrialLessonButton = styled.button`
  display: inline-flex;
  padding: 16px 215px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--yellow);
  color: var(--black);
  font-size: 18px;
  font-weight: var(--bold);
  line-height: 1.55;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--pastelYellow);
  }
`;
