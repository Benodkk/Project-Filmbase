import { Link } from "react-router-dom";

import db from "../../../database/db.json";

import Trending from "./Trending";

import { useTheme } from "styled-components";
import { StyledDiv, StyledHoverDiv } from "../../styles/shared/Div.style";
import { StyledTrendingContainer } from "../../styles/shared/Header/SearchingBar.style";
import { StyledHorizontalSpace } from "../../styles/shared/HorizotalSpace.style";

const TrendingContainer = () => {
  const theme = useTheme();

  const trendingMovies = db.movies
    .sort((a, b) => b.trending - a.trending)
    .slice(0, 3)
    .concat(db.tvSeries.sort((a, b) => b.trending - a.trending).slice(0, 3));
  const trendingPeople = db.actors.slice(0, 6);

  return (
    <StyledTrendingContainer>
      <StyledHorizontalSpace gap="30px">
        <StyledHorizontalSpace>
          <StyledDiv fontSize="20px">TRENDING MOVIES</StyledDiv>
          <Link to="/store/movies">
            <StyledHoverDiv
              color={theme.colors.brown}
              hoverColor={theme.colors.darkGold}
              fontSize="14px"
            >
              Check out more!
            </StyledHoverDiv>
          </Link>
        </StyledHorizontalSpace>
        <StyledHorizontalSpace>
          <StyledDiv fontSize="20px">TRENDING TvSERIES</StyledDiv>
          <Link to="/store/tvseries">
            <StyledHoverDiv
              color={theme.colors.brown}
              hoverColor={theme.colors.darkGold}
              fontSize="14px"
            >
              Check out more!
            </StyledHoverDiv>
          </Link>
        </StyledHorizontalSpace>
      </StyledHorizontalSpace>
      <Trending results={trendingMovies}></Trending>
      <StyledHorizontalSpace>
        <StyledDiv fontSize="20px">TRENDING ACTORS</StyledDiv>
        <Link to="/store/people">
          <StyledHoverDiv
            color={theme.colors.brown}
            hoverColor={theme.colors.darkGold}
            fontSize="14px"
          >
            Check out more!
          </StyledHoverDiv>
        </Link>
      </StyledHorizontalSpace>
      <Trending results={trendingPeople}></Trending>
    </StyledTrendingContainer>
  );
};

export default TrendingContainer;
