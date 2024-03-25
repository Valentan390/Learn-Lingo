import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogoLink = styled(Link)`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StiledLogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StiledLogoTitle = styled.p`
  color: var(--black);
  //   font-family: Roboto;
  font-size: 20px;
  //   font-style: normal;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.4px;
`;
