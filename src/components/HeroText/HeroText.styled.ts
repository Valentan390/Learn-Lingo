import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeroTextWrapper = styled.div`
  padding: 98px 73px 98px 38px;
  border-radius: 30px;
  background: var(--white);
  width: calc((100% - 24px) / 2);
`;

export const StyledHeroTextTitle = styled.h1`
  color: var(--black);
  font-size: 48px;
  font-weight: var(--medium);
  line-height: 1.16;
  letter-spacing: -0.96px;
  padding-bottom: 32px;
`;

export const StyledHeroTextSpan = styled.span`
  color: var(--black);
  font-size: 48px;
  font-style: italic;
  font-weight: var(--regular);
  line-height: 1.16;
  letter-spacing: -0.96px;
  background: var(--lightYellow);
  border-radius: 12px;
`;

export const StyledHeroText = styled.p`
  color: var(--black);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.37;
  letter-spacing: -0.32px;
  padding-bottom: 64px;
  max-width: 471px;
`;

export const StyledHeroTextLink = styled(Link)`
  display: inline-flex;
  gap: 16px;
  padding: 16px 80px;
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
    background: var(--mustard);
  }
`;
