import React from "react";

import starGold from "../../assets/star-gold.png";
import eyeGold from "../../assets/eye-gold.png";
import heartGold from "../../assets/heart-gold.png";

import {
  StyledCountedList,
  StyledCountLabel,
  StyledIcon,
  StyledIconNr,
  StyledNr,
  StyledOneCount,
  StyledSectionHeader,
  StyledSectionHeaderContainer,
  StyledSectionHeaderTitle,
} from "./User.style";

const SectionHeader = ({ title, rated, toWatch, favourite }) => {
  return (
    <StyledSectionHeaderContainer>
      <StyledSectionHeader>
        <StyledSectionHeaderTitle>{title}</StyledSectionHeaderTitle>
        <StyledCountedList>
          <StyledOneCount>
            <StyledIconNr>
              <StyledIcon src={starGold} />
              <StyledNr>{rated.length}</StyledNr>
            </StyledIconNr>
            <StyledCountLabel>ratings</StyledCountLabel>
          </StyledOneCount>
          <StyledOneCount>
            <StyledIconNr>
              <StyledIcon src={eyeGold} />
              <StyledNr>{toWatch.length}</StyledNr>
            </StyledIconNr>
            <StyledCountLabel>to watch</StyledCountLabel>
          </StyledOneCount>
          <StyledOneCount>
            <StyledIconNr>
              <StyledIcon src={heartGold} />
              <StyledNr>{favourite.length}</StyledNr>
            </StyledIconNr>
            <StyledCountLabel>favourites</StyledCountLabel>
          </StyledOneCount>
        </StyledCountedList>
      </StyledSectionHeader>
    </StyledSectionHeaderContainer>
  );
};

export default SectionHeader;
