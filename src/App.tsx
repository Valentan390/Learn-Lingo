import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import Layout from "./components/Layout/Layout";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import ModalContent from "./components/ModalContent/ModalContent";

const App = () => {
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
    </>
  );
};

export default App;
