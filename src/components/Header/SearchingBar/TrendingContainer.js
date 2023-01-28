import { Link } from "react-router-dom";

import db from "../../../database/db.json";

import Trending from "./Trending";

import { useTheme } from "styled-components";
import { StyledDiv, StyledHoverDiv } from "../../styles/shared/Div.style";
import {
  StyledTrendingContainer,
  StyledTrendingTitle,
  StyledTrendingUpperRow,
} from "../../styles/shared/Header/SearchingBar.style";

const TrendingContainer = () => {
  const theme = useTheme();

  const trendingMovies = db.movies
    .sort((a, b) => b.trending - a.trending)
    .slice(0, 3)
    .concat(db.tvSeries.sort((a, b) => b.trending - a.trending).slice(0, 3));
  const trendingPeople = db.actors.slice(0, 6);

  return (
    <StyledTrendingContainer>
      <StyledTrendingUpperRow>
        <StyledTrendingTitle>
          <StyledDiv fontSize="20px">TRENDING MOVIES</StyledDiv>
          <Link to="/ranking/movies/popularity_down/no_filter/1">
            <StyledHoverDiv
              color={theme.colors.brown}
              hoverColor={theme.colors.darkGold}
              fontSize="14px"
            >
              Check out more!
            </StyledHoverDiv>
          </Link>
        </StyledTrendingTitle>
        <StyledTrendingTitle>
          <StyledDiv fontSize="20px">TRENDING TvSERIES</StyledDiv>
          <Link to="/ranking/tvSeries/popularity_down/no_filter/1">
            <StyledHoverDiv
              color={theme.colors.brown}
              hoverColor={theme.colors.darkGold}
              fontSize="14px"
            >
              Check out more!
            </StyledHoverDiv>
          </Link>
        </StyledTrendingTitle>
      </StyledTrendingUpperRow>
      <Trending results={trendingMovies}></Trending>
    </StyledTrendingContainer>
  );
};

export default TrendingContainer;
