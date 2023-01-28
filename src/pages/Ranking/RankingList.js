import MovieCard from "../../components/MovieCard";
import StarRating from "../../components/StarRating";
import TitleWithYear from "../../components/TitleWithYear";

import { useTheme } from "styled-components";
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
  return (
    <StyledRankingList>
      {displayData.map((element) => {
        return (
          <StyledRankingCardContainer key={element.id}>
            <StyledIndexNr width={140}>
              {(page_nr - 1) * 50 + displayData.indexOf(element) + 1}
            </StyledIndexNr>
            <MovieCard movie={element} cardWidth={140} />
            <StyledRankingCard>
              <StyledLeftSide>
                <TitleWithYear movie={element} />
                <StyledGenre>
                  <StyledDiv color={theme.colors.grey}>Genre</StyledDiv>
                  <StyledDiv>{element.genre}</StyledDiv>
                </StyledGenre>
              </StyledLeftSide>
              <StarRating movie={element} />
            </StyledRankingCard>
          </StyledRankingCardContainer>
        );
      })}
    </StyledRankingList>
  );
};
export default RankingList;
