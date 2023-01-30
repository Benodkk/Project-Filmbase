import React from "react";

import user from "../../assets/user.png";
import welcomeMain from "../../assets/welcome-main.jpg";

import {
  StyledUserName,
  StyledWelcomeImgContainer,
  StyledWelcomeSection,
} from "../../components/styles/shared/User/User.style";
import { StyledImage } from "../../components/styles/shared/Image.style";

const WelcomeUserSection = () => {
  return (
    <StyledWelcomeSection>
      <StyledWelcomeImgContainer photo={welcomeMain}>
        <StyledUserName>
          <StyledImage src={user} width="100px" />
          <div>USER</div>
        </StyledUserName>
      </StyledWelcomeImgContainer>
    </StyledWelcomeSection>
  );
};

export default WelcomeUserSection;
