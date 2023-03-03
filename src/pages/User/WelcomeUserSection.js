import React from "react";

import user from "../../assets/user.png";
import welcomeMain from "../../assets/welcome-main.jpg";

import {
  StyledUserImage,
  StyledUserName,
  StyledWelcomeImgContainer,
  StyledWelcomeSection,
} from "./User.style";

const WelcomeUserSection = () => {
  return (
    <StyledWelcomeSection>
      <StyledWelcomeImgContainer photo={welcomeMain}>
        <StyledUserName>
          <StyledUserImage src={user} />
          <div>USER</div>
        </StyledUserName>
      </StyledWelcomeImgContainer>
    </StyledWelcomeSection>
  );
};

export default WelcomeUserSection;
