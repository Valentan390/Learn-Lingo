import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import Layout from "./components/Layout/Layout";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import ModalContent from "./components/ModalContent/ModalContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./hooks/useReduxHooks";
import { useEffect } from "react";
import { refreshUser } from "./redux/user/operationsUser";
import { fetchTeachers } from "./redux/teachers/operationsTeachers";
import { selectCurrentPage } from "./redux/teachers/teachersSelectors";

const App = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchTeachers(currentPage));
  }, [dispatch, currentPage]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>

      <ModalContainer>
        <ModalContent />
      </ModalContainer>

      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default App;
