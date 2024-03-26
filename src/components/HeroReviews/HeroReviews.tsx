import { FC } from "react";
import {
  StyledHeroReviewsItem,
  StyledHeroReviewsList,
  StyledHeroReviewsQuantity,
  StyledHeroReviewsText,
  StyledHeroReviewsWrapper,
} from "./HeroReviews.styled";

const HeroReviews: FC = () => {
  const reviews = [
    { quantity: "32,000", text: "Experienced<br /> tutors" },
    { quantity: "300,000", text: "5-star tutor<br /> reviews" },
    { quantity: "120", text: "Subjects<br /> taught" },
    { quantity: "200", text: "Tutor<br /> nationalities" },
  ];
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
