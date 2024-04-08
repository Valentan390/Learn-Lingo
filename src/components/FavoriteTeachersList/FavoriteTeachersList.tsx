import { FC } from "react";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { selectFavoriteTeachers } from "../../redux/favorite/favoriteSelectors";
import TeachersItem from "../TeachersItem/TeachersItem";
import NoFavorites from "../NoFavorites/NoFavorites";
import { StyledTeachersListWrapper } from "../TeachersList/TeachersList.styled";

const FavoriteTeachersList: FC = () => {
  const favoriteTeachers = useAppSelector(selectFavoriteTeachers);
  return (
    <>
      {favoriteTeachers.length <= 0 ? (
        <NoFavorites />
      ) : (
        <StyledTeachersListWrapper>
          {favoriteTeachers.map((favoriteTeacher, index) => (
            <TeachersItem key={index} teacher={favoriteTeacher} />
          ))}
        </StyledTeachersListWrapper>
      )}
    </>
  );
};

export default FavoriteTeachersList;
