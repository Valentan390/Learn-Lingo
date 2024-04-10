import { FC } from "react";
import sticker1x from "../../images/desctop/sticker1.webp";
import sticker2x from "../../images/desctop/sticker1@2x.webp";
import {
  StyledNoFavoritesImg,
  StyledNoFavoritesText,
  StyledNoFavoritesWrapper,
} from "./NoData.styled";

const NoData: FC = () => {
  return (
    <StyledNoFavoritesWrapper>
      <StyledNoFavoritesImg
        srcSet={`${sticker1x} 1x, ${sticker2x} 2x`}
        src={`${sticker1x}`}
        alt="sticker"
      />
      <StyledNoFavoritesText>No data available.</StyledNoFavoritesText>
    </StyledNoFavoritesWrapper>
  );
};

export default NoData;
