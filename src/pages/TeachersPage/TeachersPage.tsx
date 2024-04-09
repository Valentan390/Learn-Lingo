import { FC, useEffect } from "react";
import TeachersList from "../../components/TeachersList/TeachersList";
import Main from "../../components/Main/Main";
import useAuthUser from "../../hooks/useAuthUser";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { getFavoriteTeachers } from "../../redux/favorite/operationsFavorite";
import FiltersTeachers from "../../components/FiltersTeachers/FiltersTeachers";

const TeachersPage: FC = () => {
  const { isAuthUser } = useAuthUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthUser) {
      dispatch(getFavoriteTeachers());
    }
  }, [isAuthUser, dispatch]);

  return (
    <Main>
      <FiltersTeachers />
      <TeachersList />
    </Main>
  );
};

export default TeachersPage;
