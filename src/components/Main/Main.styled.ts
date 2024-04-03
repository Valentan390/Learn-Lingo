import styled from "styled-components";

export const StyledMain = styled.main``;

interface StyledMainSectionProps {
  $padd?: string;
}

export const StyledMainSection = styled.section<StyledMainSectionProps>`
  padding-bottom: 32px;
  padding-top: ${(props) => (props.$padd ? "32px" : "0")};
`;

interface StyledMainWrapperProps {
  $disp?: string;
}

export const StyledMainWrapper = styled.div<StyledMainWrapperProps>`
  display: ${(props) => (props.$disp ? "flex" : "blok")};
  justify-content: start;
  align-items: center;
  gap: 24px;
  width: 100%;
  flex-wrap: wrap;
`;
