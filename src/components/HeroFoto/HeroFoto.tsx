import { FC } from "react";
import sticker1x from "../../images/desctop/sticker1.webp";
import sticker2x from "../../images/desctop/sticker1@2x.webp";
import {
  StyledHeroFotoMac,
  StyledHeroFotoSticker,
  StyledHeroFotoWrapper,
} from "./HeroFoto.styled";
import Mac1x from "../../images/desctop/Mac.webp";
import Mac2x from "../../images/desctop/Mac@2x.webp";

const HeroFoto: FC = () => {
  return (
    <StyledHeroFotoWrapper>
      <StyledHeroFotoSticker
        srcSet={`${sticker1x} 1x, ${sticker2x} 2x`}
        src={sticker1x}
        alt="sticker"
      />

      <StyledHeroFotoMac
        srcSet={`${Mac1x} 1x, ${Mac2x} 2x`}
        src={Mac1x}
        alt="Mac"
      />
    </StyledHeroFotoWrapper>
  );
};

export default HeroFoto;
