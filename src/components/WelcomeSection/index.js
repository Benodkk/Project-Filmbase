import {
  StyledWelcomeImgContainer,
  StyledWelcomeSection,
} from "../../components/styles/shared/WelcomeSection.style";
import welcomeMain from "../../assets/welcome-main.jpg";

const WelcomeSection = ({ photo, height }) => {
  return (
    <StyledWelcomeSection>
      <StyledWelcomeImgContainer
        height={height}
        photo={photo}
      ></StyledWelcomeImgContainer>
    </StyledWelcomeSection>
  );
};

export default WelcomeSection;
