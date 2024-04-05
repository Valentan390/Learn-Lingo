import { FC } from "react";
import {
  StyledHeroFotoSticker,
  StyledHeroFotoWrapper,
} from "./HeroFoto.styled";
import block1x from "../../images/desctop/block.webp";
import block2x from "../../images/desctop/block@2x.webp";

const HeroFoto: FC = () => {
  return (
    <StyledHeroFotoWrapper>
      <StyledHeroFotoSticker
        srcSet={`${block1x} 1x, ${block2x} 2x`}
        src={block1x}
        alt="sticker"
      />
    </StyledHeroFotoWrapper>
  );
};

export default HeroFoto;
