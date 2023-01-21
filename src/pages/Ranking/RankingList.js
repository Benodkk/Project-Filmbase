import { Link } from "react-router-dom";

import MovieCard from "../../components/MovieCard";

import starGold from "../../assets/star-gold.png";

import { useTheme } from "styled-components";
import { StyledVerticalContainer } from "../../components/styles/shared/Container.style";
import { StyledHorizontalRow } from "../../components/styles/shared/HorizotalSpace.style";
import {
  StyledIndexNr,
  StyledLeftSide,
  StyledRankingCard,
  StyledRankingCardContainer,
  StyledRightSide,
} from "../../components/styles/shared/Ranking/Ranking.style";
import { StyledDiv } from "../../components/styles/shared/Div.style";
import { StyledImage } from "../../components/styles/shared/Image.style";

const RankingList = ({ displayData, page_nr }) => {
  const theme = useTheme();
  return (
    <StyledVerticalContainer gap="20px" padding="20px" paddingSide="20px">
      {displayData.map((element) => {
        return (
          <StyledRankingCardContainer key={element.id}>
            <StyledIndexNr width={140}>
              {(page_nr - 1) * 50 + displayData.indexOf(element) + 1}
            </StyledIndexNr>
            <MovieCard movie={element} cardWidth={140} />
            <StyledRankingCard>
              <StyledLeftSide>
                <StyledHorizontalRow gap="5px">
                  <StyledDiv fontSize="20px">
                    <Link to={element.id}>{element.title}</Link>
                  </StyledDiv>
                  <StyledDiv fontSize="20px">
                    {element.realsed.slice(0, 4)}
                  </StyledDiv>
                </StyledHorizontalRow>
                <StyledHorizontalRow gap="5px">
                  <StyledDiv color={theme.colors.grey}>Genre</StyledDiv>
                  <StyledDiv>{element.genre}</StyledDiv>
                </StyledHorizontalRow>
              </StyledLeftSide>
              <StyledRightSide>
                <StyledHorizontalRow gap="5px" alignItems="flex-end">
                  <StyledImage width="40px" src={starGold} />
                  <StyledDiv fontSize="28px">
                    {element.rating.toFixed(2).toString().replace(".", ",")}
                  </StyledDiv>
                </StyledHorizontalRow>
                <StyledDiv color={theme.colors.grey} fontSize="14px">
                  {element.numberOfRatings.toLocaleString("pl-PL")} ratings
                </StyledDiv>
              </StyledRightSide>
            </StyledRankingCard>
          </StyledRankingCardContainer>
        );
      })}
    </StyledVerticalContainer>
  );
};
export default RankingList;
