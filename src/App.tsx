import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import ModalContent from "./components/ModalContent/ModalContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./hooks/useReduxHooks";
import { Suspense, lazy, useEffect } from "react";
import { refreshUser } from "./redux/user/operationsUser";
import { fetchTeachers } from "./redux/teachers/operationsTeachers";
import { selectCurrentPage } from "./redux/teachers/teachersSelectors";
import useAuthUser from "./hooks/useAuthUser";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoaderHourglass from "./components/LoaderHourglass/LoaderHourglass";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

const App = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const { isAuthUser } = useAuthUser();

  useEffect(() => {
    if (!isAuthUser) {
      dispatch(refreshUser());
    }
  }, [dispatch, isAuthUser]);

  useEffect(() => {
    dispatch(fetchTeachers(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      <Suspense fallback={<LoaderHourglass />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  redirectTo="/teachers"
                  component={FavoritesPage}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <ModalContainer>
        <ModalContent />
      </ModalContainer>
      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default App;
