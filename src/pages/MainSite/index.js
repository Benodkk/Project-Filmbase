import { StyledWelcomeSection } from "../../components/styles/shared/WelcomeSection.style";
import welcomeMain from "../../assets/welcome-main.jpg";
import WelcomeSection from "../../components/WelcomeSection";
import MovieSlider from "./MovieSlider";
import { StyledPageContainer } from "../../components/styles/shared/Container.style";
import RankingSection from "./RankingSection.js";

const MainSite = () => {
  return (
    <StyledPageContainer>
      <WelcomeSection photo={welcomeMain} height="50vh" />
      <MovieSlider />
      <RankingSection />
    </StyledPageContainer>
  );
};

export default MainSite;
