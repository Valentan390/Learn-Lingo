import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import {
  getFilterTeachers,
  selectTeachers,
} from "../../redux/teachers/teachersSelectors";
import TeachersItem from "../TeachersItem/TeachersItem";
import { setCurrentPage } from "../../redux/teachers/teachersSlice";
import {
  StyledTeachersListLoadMore,
  StyledTeachersListWrapper,
} from "./TeachersList.styled";
import { useLocation } from "react-router-dom";
import { getFilterFavoriteTeachers } from "../../redux/favorite/favoriteSelectors";
import NoData from "../NoData/NoData";

const TeachersList: FC = () => {
  const { pathname } = useLocation();
  const teachers = useAppSelector(selectTeachers);
  const dispatch = useAppDispatch();
  const filterTeachers = useAppSelector(getFilterTeachers);
  const filterFavoriteTeachers = useAppSelector(getFilterFavoriteTeachers);

  const renderTeachers =
    pathname === "/teachers" ? filterTeachers : filterFavoriteTeachers;

  return (
    // <>
    //   {pathname === "/teachers" ? (
    //     <>
    //       <StyledTeachersListWrapper>
    //         {filterTeachers.map((teacher, index) => (
    //           <TeachersItem key={index} teacher={teacher} />
    //         ))}
    //       </StyledTeachersListWrapper>

    //       {teachers.length < 29 && (
    //         <StyledTeachersListLoadMore
    //           type="button"
    //           onClick={() => dispatch(setCurrentPage())}
    //         >
    //           Load more
    //         </StyledTeachersListLoadMore>
    //       )}
    //     </>
    //   ) : (
    //     <>
    //       {filterFavoriteTeachers.length <= 0 ? (
    //         <NoData />
    //       ) : (
    //         <StyledTeachersListWrapper>
    //           {filterFavoriteTeachers.map((teacher, index) => (
    //             <TeachersItem key={index} teacher={teacher} />
    //           ))}
    //         </StyledTeachersListWrapper>
    //       )}
    //     </>
    //   )}
    // </>

    <>
      {renderTeachers.length <= 0 ? (
        <NoData />
      ) : (
        <StyledTeachersListWrapper>
          {renderTeachers.map((teacher, index) => (
            <TeachersItem key={index} teacher={teacher} />
          ))}
        </StyledTeachersListWrapper>
      )}

      {pathname === "/teachers" &&
        teachers.length < 29 &&
        !(renderTeachers.length <= 0) && (
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
