import { FC } from "react";
import Main from "../../components/Main/Main";
// import FavoriteTeachersList from "../../components/FavoriteTeachersList/FavoriteTeachersList";
import FiltersTeachers from "../../components/FiltersTeachers/FiltersTeachers";
import TeachersList from "../../components/TeachersList/TeachersList";

const FavoritesPage: FC = () => {
  return (
    <Main>
      <FiltersTeachers />
      <TeachersList />
    </Main>
  );
};

export default FavoritesPage;
