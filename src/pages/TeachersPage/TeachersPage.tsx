import { FC } from "react";
import TeachersList from "../../components/TeachersList/TeachersList";
import Main from "../../components/Main/Main";

const TeachersPage: FC = () => {
  return (
    <Main>
      <TeachersList />
    </Main>
  );
};

export default TeachersPage;
