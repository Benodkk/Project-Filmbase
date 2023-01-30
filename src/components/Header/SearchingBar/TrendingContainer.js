import React from "react";
import { Link } from "react-router-dom";

import db from "../../../database/db.json";

import Trending from "./Trending";

import { useTheme } from "styled-components";
import { StyledDiv, StyledHoverDiv } from "../../styles/shared/Div.style";
import {
  StyledTrendingContainer,
  StyledTrendingTitle,
  StyledTrendingType,
} from "../../styles/shared/Header/SearchingBar.style";

const TrendingContainer = () => {
  const theme = useTheme();

  const trendingMovies = db.movies
    .sort((a, b) => b.trending - a.trending)
    .slice(0, 3);

  const trendingSeries = db.tvSeries
    .sort((a, b) => b.trending - a.trending)
    .slice(0, 3);

  return (
    <StyledTrendingContainer>
      <StyledTrendingType>
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
        <Trending results={trendingMovies}></Trending>
      </StyledTrendingType>

      <StyledTrendingType>
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
        <Trending results={trendingSeries}></Trending>
      </StyledTrendingType>
    </StyledTrendingContainer>
  );
};

export default TrendingContainer;
