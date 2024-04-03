import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledTeachersReviews,
  StyledTeachersReviewsContainer,
  StyledTeachersReviewsExperience,
  StyledTeachersReviewsItem,
  StyledTeachersReviewsList,
  StyledTeachersReviewsP,
} from "./TeachersReviews.styled";
import { Reviews } from "../../helpers/InterfaceData";

interface TeachersReviewsProps {
  reviews: Reviews[];
  experience: string;
}

const TeachersReviews: FC<TeachersReviewsProps> = ({ reviews, experience }) => {
  return (
    <>
      <StyledTeachersReviewsExperience>
        {experience}
      </StyledTeachersReviewsExperience>
      <StyledTeachersReviewsList>
        {reviews.map((review, index) => {
          return (
            <StyledTeachersReviewsItem key={index}>
              <StyledTeachersReviewsContainer>
                <StyledTeachersReviews>
                  {review.reviewer_name[0]}
                </StyledTeachersReviews>
                <div>
                  <StyledTeachersReviewsP>
                    {review.reviewer_name}
                  </StyledTeachersReviewsP>
                  <StyledTeachersReviewsContainer $gap="8px">
                    <Icon iconName="icon-star" width="16px" height="16px" />
                    <StyledTeachersReviewsP $rating="yes" $black="black">
                      {review.reviewer_rating}
                    </StyledTeachersReviewsP>
                  </StyledTeachersReviewsContainer>
                </div>
              </StyledTeachersReviewsContainer>
              <StyledTeachersReviewsP $black="black">
                {review.comment}
              </StyledTeachersReviewsP>
            </StyledTeachersReviewsItem>
          );
        })}
      </StyledTeachersReviewsList>
    </>
  );
};

export default TeachersReviews;
