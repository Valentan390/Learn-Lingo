import { FC, useEffect } from "react";
import Main from "../../components/Main/Main";
import FiltersTeachers from "../../components/FiltersTeachers/FiltersTeachers";
import TeachersList from "../../components/TeachersList/TeachersList";
import useAuthUser from "../../hooks/useAuthUser";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { getFavoriteTeachers } from "../../redux/favorite/operationsFavorite";

const FavoritesPage: FC = () => {
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

export default FavoritesPage;
