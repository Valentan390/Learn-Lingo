import { FC } from "react";
import HeroText from "../../components/HeroText/HeroText";
import HeroFoto from "../../components/HeroFoto/HeroFoto";
import HeroReviews from "../../components/HeroReviews/HeroReviews";
import Main from "../../components/Main/Main";

const HomePage: FC = () => {
  return (
    <Main>
      <HeroText />
      <HeroFoto />
      <HeroReviews />
    </Main>
  );
};

export default HomePage;
