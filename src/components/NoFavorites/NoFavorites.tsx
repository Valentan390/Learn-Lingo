import { FC } from "react";
import sticker1x from "../../images/desctop/sticker1.webp";
import sticker2x from "../../images/desctop/sticker1@2x.webp";
import {
  StyledNoFavoritesImg,
  StyledNoFavoritesText,
  StyledNoFavoritesWrapper,
} from "./NoFavorites.styled";

const NoFavorites: FC = () => {
  return (
    <StyledNoFavoritesWrapper>
      <StyledNoFavoritesImg
        srcSet={`${sticker1x} 1x, ${sticker2x} 2x`}
        src={`${sticker1x}`}
        alt="sticker"
      />
      <StyledNoFavoritesText>
        You haven't added teachers to favorites yet. Please add your favorite
        teachers to your favorites on the teachers page.
      </StyledNoFavoritesText>
    </StyledNoFavoritesWrapper>
  );
};

export default NoFavorites;
