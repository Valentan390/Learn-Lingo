import { FC, useState } from "react";
import { Teachers } from "../../helpers/InterfaceData";
import Icon from "../Icon/Icon";
import {
  StyledTeachersItem,
  StyledTeachersItemButtonHeart,
  StyledTeachersItemButtonLesson,
  StyledTeachersItemButtonReadMore,
  StyledTeachersItemContainer,
  StyledTeachersItemImg,
  StyledTeachersItemImgContainer,
  StyledTeachersItemLessons,
  StyledTeachersItemLessonsContainer,
  StyledTeachersItemLevel,
  StyledTeachersItemLevels,
  StyledTeachersItemName,
  StyledTeachersItemP,
  StyledTeachersItemSpanBlack,
  StyledTeachersItemSpanGrin,
  StyledTeachersItemTextContainer,
} from "./TeachersItem.styled";
import TeachersReviews from "../TeachersReviews/TeachersReviews";
import useModalHandler from "../../hooks/useModalHandler";

interface TeachersItemProps {
  teacher: Teachers;
}

const TeachersItem: FC<TeachersItemProps> = ({ teacher }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { handleOpenModal } = useModalHandler();

  return (
    <StyledTeachersItem>
      <StyledTeachersItemImgContainer>
        <StyledTeachersItemImg src={teacher.avatar_url} alt={teacher.name} />
        <Icon
          iconName="icon-Group-82"
          width="12px"
          height="12px"
          position="absolute"
          top="20px"
          right="20px"
        />
      </StyledTeachersItemImgContainer>

      <StyledTeachersItemTextContainer>
        <StyledTeachersItemContainer>
          <StyledTeachersItemP color="grey">Languages</StyledTeachersItemP>
          <StyledTeachersItemLessons>
            <StyledTeachersItemLessonsContainer>
              <Icon
                iconName="icon-book-open-01"
                width="16px"
                height="16px"
                fill="none"
                stroke="var(--black)"
              />
              <StyledTeachersItemP>Lessons online</StyledTeachersItemP>
            </StyledTeachersItemLessonsContainer>
            <Icon
              iconName="icon-Vector-4"
              width="16px"
              height="16px"
              stroke="rgba(18, 20, 23, 0.20)"
            />
            <StyledTeachersItemP>
              Lessons done:{" "}
              <StyledTeachersItemSpanGrin>
                {teacher.lessons_done}
              </StyledTeachersItemSpanGrin>
            </StyledTeachersItemP>
            <Icon
              iconName="icon-Vector-4"
              width="16px"
              height="16px"
              stroke="rgba(18, 20, 23, 0.20)"
            />
            <StyledTeachersItemLessonsContainer>
              <Icon iconName="icon-star" width="16px" height="16px" />
              <StyledTeachersItemP>
                Rating:{" "}
                <StyledTeachersItemSpanGrin>
                  {teacher.rating}
                </StyledTeachersItemSpanGrin>
              </StyledTeachersItemP>
            </StyledTeachersItemLessonsContainer>
            <Icon
              iconName="icon-Vector-4"
              width="16px"
              height="16px"
              stroke="rgba(18, 20, 23, 0.20)"
            />
            <StyledTeachersItemP>
              Price / 1 hour:{" "}
              <StyledTeachersItemSpanGrin>
                {teacher.price_per_hour}$
              </StyledTeachersItemSpanGrin>
            </StyledTeachersItemP>
            <StyledTeachersItemButtonHeart type="button">
              <Icon
                iconName="icon-normal-heart "
                width="26px"
                height="26px"
                fill="none"
                stroke="var(--black)"
              />
            </StyledTeachersItemButtonHeart>
          </StyledTeachersItemLessons>
        </StyledTeachersItemContainer>
        <StyledTeachersItemName>
          {teacher.name} {teacher.surname}
        </StyledTeachersItemName>

        <StyledTeachersItemP color="grey">
          Speaks:{" "}
          {teacher.languages.map((language, index) => (
            <StyledTeachersItemSpanBlack key={index} textDecoration="line">
              {language}
              {index !== teacher.languages.length - 1 ? ", " : "."}
            </StyledTeachersItemSpanBlack>
          ))}
        </StyledTeachersItemP>

        <StyledTeachersItemP color="grey">
          Lesson Info:{" "}
          <StyledTeachersItemSpanBlack>
            {teacher.lesson_info}
          </StyledTeachersItemSpanBlack>
        </StyledTeachersItemP>

        <StyledTeachersItemP color="grey">
          Conditions:{" "}
          {teacher.conditions.map((condition, index) => (
            <StyledTeachersItemSpanBlack key={index}>
              {condition}
              {index !== teacher.languages.length - 1 && " "}
            </StyledTeachersItemSpanBlack>
          ))}
        </StyledTeachersItemP>

        {showFullDescription && (
          <TeachersReviews
            reviews={teacher.reviews}
            experience={teacher.experience}
          />
        )}

        <StyledTeachersItemButtonReadMore
          type="button"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Read less" : "Read more"}
        </StyledTeachersItemButtonReadMore>

        <StyledTeachersItemLevels>
          {teacher.levels.map((level, index) => (
            <StyledTeachersItemLevel
              key={index}
              $backg={index === 0 ? "yellow" : undefined}
            >
              #{level}
            </StyledTeachersItemLevel>
          ))}
        </StyledTeachersItemLevels>

        {showFullDescription && (
          <StyledTeachersItemButtonLesson
            type="button"
            onClick={() =>
              handleOpenModal("TrialLessonModal", {
                avatar_url: teacher.avatar_url,
                name: teacher.name,
                surname: teacher.surname,
              })
            }
          >
            Book trial lesson
          </StyledTeachersItemButtonLesson>
        )}
      </StyledTeachersItemTextContainer>
    </StyledTeachersItem>
  );
};

export default TeachersItem;
