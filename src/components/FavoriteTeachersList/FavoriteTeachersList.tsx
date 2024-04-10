import { FC } from "react";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { getFilterFavoriteTeachers } from "../../redux/favorite/favoriteSelectors";
import TeachersItem from "../TeachersItem/TeachersItem";
import NoFavorites from "../NoData/NoData";
import { StyledTeachersListWrapper } from "../TeachersList/TeachersList.styled";

const FavoriteTeachersList: FC = () => {
  const filterFavoriteTeachers = useAppSelector(getFilterFavoriteTeachers);
  return (
    <>
      {filterFavoriteTeachers.length <= 0 ? (
        <NoFavorites />
      ) : (
        <StyledTeachersListWrapper>
          {filterFavoriteTeachers.map((favoriteTeacher, index) => (
            <TeachersItem key={index} teacher={favoriteTeacher} />
          ))}
        </StyledTeachersListWrapper>
      )}
    </>
  );
};

export default FavoriteTeachersList;
