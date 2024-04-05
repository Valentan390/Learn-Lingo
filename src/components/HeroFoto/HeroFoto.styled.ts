import styled from "styled-components";

export const StyledHeroFotoWrapper = styled.div`
  border-radius: 30px;
  background: var(--lightYellow);
  width: calc((100% - 24px) / 2);
  position: relative;
`;

export const StyledHeroFotoSticker = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

export const StyledHeroFotoMac = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 360px;
`;
