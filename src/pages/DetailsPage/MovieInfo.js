import React from "react";

import InteractionCard from "../../components/InteractionCard";
import MovieImg from "../../components/MovieCard/MovieImg";
import MovieDetails from "./MovieDetails";

import {
  StyledMovieInfo,
  StyledMovieInfoContainer,
} from "../../components/styles/shared/DetailsPage/DetailsPage.style";

const MovieInfo = ({ movie }) => {
  return (
    <StyledMovieInfoContainer>
      <StyledMovieInfo>
        <MovieImg movie={movie} />
        <MovieDetails movie={movie} />
      </StyledMovieInfo>
      <InteractionCard movie={movie} gap="20px" />
    </StyledMovieInfoContainer>
  );
};

export default MovieInfo;
