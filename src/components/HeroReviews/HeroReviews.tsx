import { FC } from "react";
import {
  StyledHeroReviewsItem,
  StyledHeroReviewsList,
  StyledHeroReviewsQuantity,
  StyledHeroReviewsText,
  StyledHeroReviewsWrapper,
} from "./HeroReviews.styled";
import { reviews } from "../../helpers/ComponentData";

const HeroReviews: FC = () => {
  return (
    <StyledHeroReviewsWrapper>
      <StyledHeroReviewsList>
        {reviews.map((review, index) => (
          <StyledHeroReviewsItem key={index}>
            <StyledHeroReviewsQuantity>
              {review.quantity} +
            </StyledHeroReviewsQuantity>
            <StyledHeroReviewsText
              dangerouslySetInnerHTML={{ __html: review.text }}
            ></StyledHeroReviewsText>
          </StyledHeroReviewsItem>
        ))}
      </StyledHeroReviewsList>
    </StyledHeroReviewsWrapper>
  );
};

export default HeroReviews;
