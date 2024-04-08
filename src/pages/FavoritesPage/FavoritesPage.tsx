import { FC } from "react";
import Main from "../../components/Main/Main";
import FavoriteTeachersList from "../../components/FavoriteTeachersList/FavoriteTeachersList";

const FavoritesPage: FC = () => {
  return (
    <Main>
      <FavoriteTeachersList />
    </Main>
  );
};

export default FavoritesPage;
