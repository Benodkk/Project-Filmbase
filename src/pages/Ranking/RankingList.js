import React from "react";

import MovieCardRate from "../../components/MovieCardRate";
import StarRating from "../../components/StarRating";
import TitleWithYear from "../../components/TitleWithYear";

import { reactDevice } from "../../styles/deviceWidth";
import { useMediaQuery } from "react-responsive";
import {
  StyledRankingList,
  StyledIndexNr,
  StyledLeftSide,
  StyledRankingCard,
  StyledRankingCardContainer,
  StyledGenre,
  StyledGenreLabel,
} from "./Ranking.style";

const RankingList = ({ displayData, page_nr, genres, kind }) => {
  const isTablet = useMediaQuery(reactDevice.tablet);

  const isMovie = kind === "movie";

  return (
    <StyledRankingList>
      {displayData.map((element) => {
        return (
          <StyledRankingCardContainer key={element.id}>
            <StyledIndexNr>
              {(page_nr - 1) * 20 + displayData.indexOf(element) + 1}
            </StyledIndexNr>
            <MovieCardRate movie={element} isMovie={isMovie} />
            <StyledRankingCard>
              <StyledLeftSide>
                <TitleWithYear
                  isColumn={!isTablet}
                  movie={element}
                  isMovie={isMovie}
                />
                <StyledGenre>
                  <StyledGenreLabel>Genre</StyledGenreLabel>
                  <div>
                    {genres
                      .filter((item) => element.genre_ids.includes(item.id))
                      .map((element) => element.name)
                      .join(", ")}
                  </div>
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
