import React from "react";

import MovieCard from "../../components/MovieCard";
import StarRating from "../../components/StarRating";
import TitleWithYear from "../../components/TitleWithYear";

import { useTheme } from "styled-components";
import { reactDevice } from "../../components/styles/deviceWidth";
import { useMediaQuery } from "react-responsive";
import {
  StyledRankingList,
  StyledIndexNr,
  StyledLeftSide,
  StyledRankingCard,
  StyledRankingCardContainer,
  StyledGenre,
} from "../../components/styles/shared/Ranking/Ranking.style";
import { StyledDiv } from "../../components/styles/shared/Div.style";

const RankingList = ({ displayData, page_nr }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(reactDevice.tablet);

  return (
    <StyledRankingList>
      {displayData.map((element) => {
        return (
          <StyledRankingCardContainer key={element.id}>
            <StyledIndexNr>
              {(page_nr - 1) * 50 + displayData.indexOf(element) + 1}
            </StyledIndexNr>
            <MovieCard movie={element} />
            <StyledRankingCard>
              <StyledLeftSide>
                <TitleWithYear isColumn={!isTablet} movie={element} />
                <StyledGenre>
                  <StyledDiv color={theme.colors.grey}>Genre</StyledDiv>
                  <StyledDiv>{element.genre}</StyledDiv>
                </StyledGenre>
              </StyledLeftSide>
              <StarRating row={!isTablet} movie={element} />
            </StyledRankingCard>
          </StyledRankingCardContainer>
        );
      })}
    </StyledRankingList>
  );
};
export default RankingList;
