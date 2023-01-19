import {
  StyledWelcomeImgContainer,
  StyledWelcomeSection,
} from "../../components/styles/shared/WelcomeSection.style";
import welcomeMain from "../../assets/welcome-main.jpg";

const WelcomeSection = () => {
  return (
    <StyledWelcomeSection>
      <StyledWelcomeImgContainer
        height="50vh"
        photo={welcomeMain}
      ></StyledWelcomeImgContainer>
    </StyledWelcomeSection>
  );
};

export default WelcomeSection;
