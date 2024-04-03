import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { selectTeachers } from "../../redux/teachers/teachersSelectors";
import TeachersItem from "../TeachersItem/TeachersItem";
import { setCurrentPage } from "../../redux/teachers/teachersSlice";
import {
  StyledTeachersListLoadMore,
  StyledTeachersListWrapper,
} from "./TeachersList.styled";

const TeachersList: FC = () => {
  const teachers = useAppSelector(selectTeachers);
  const dispatch = useAppDispatch();

  return (
    <>
      <StyledTeachersListWrapper>
        {teachers?.map((teacher, index) => (
          <TeachersItem key={index} teacher={teacher} />
        ))}
      </StyledTeachersListWrapper>

      {teachers.length < 29 && (
        <StyledTeachersListLoadMore
          type="button"
          onClick={() => dispatch(setCurrentPage())}
        >
          Load more
        </StyledTeachersListLoadMore>
      )}
    </>
  );
};

export default TeachersList;
