import React from "react";

import starGold from "../../assets/star-gold.png";
import eyeGold from "../../assets/eye-gold.png";
import heartGold from "../../assets/heart-gold.png";

import { useTheme } from "styled-components";
import {
  StyledCountedList,
  StyledIconNr,
  StyledOneCount,
  StyledSectionHeader,
  StyledSectionHeaderContainer,
} from "../../components/styles/shared/User/User.style";
import { StyledDiv } from "../../components/styles/shared/Div.style";
import { StyledImage } from "../../components/styles/shared/Image.style";

const SectionHeader = ({ title, rated, toWatch, favourite }) => {
  const theme = useTheme();
  return (
    <StyledSectionHeaderContainer>
      <StyledSectionHeader>
        <StyledDiv fontSize="32px">{title}</StyledDiv>
        <StyledCountedList>
          <StyledOneCount>
            <StyledIconNr>
              <StyledImage src={starGold} width="30px" />
              <StyledDiv fontSize="24px">{rated.length}</StyledDiv>
            </StyledIconNr>
            <StyledDiv color={theme.colors.grey}>ratings</StyledDiv>
          </StyledOneCount>
          <StyledOneCount>
            <StyledIconNr>
              <StyledImage src={eyeGold} width="30px" />
              <StyledDiv fontSize="24px">{toWatch.length}</StyledDiv>
            </StyledIconNr>
            <StyledDiv color={theme.colors.grey}>to watch</StyledDiv>
          </StyledOneCount>
          <StyledOneCount>
            <StyledIconNr>
              <StyledImage src={heartGold} width="30px" />
              <StyledDiv fontSize="24px">{favourite.length}</StyledDiv>
            </StyledIconNr>
            <StyledDiv color={theme.colors.grey}>favourites</StyledDiv>
          </StyledOneCount>
        </StyledCountedList>
      </StyledSectionHeader>
    </StyledSectionHeaderContainer>
  );
};

export default SectionHeader;
