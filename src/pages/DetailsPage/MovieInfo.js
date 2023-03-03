import React from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API/config";

import InteractionCard from "../../components/InteractionCard";
import MovieDetails from "./MovieDetails";

import {
  StyledMovieInfo,
  StyledMovieInfoContainer,
  StyledMoviePoster,
} from "./DetailsPage.style";

const MovieInfo = ({ display, credits, kind }) => {
  const path = `${IMAGE_BASE_URL}${POSTER_SIZE}${display.poster_path}`;
  return (
    <StyledMovieInfoContainer>
      <StyledMovieInfo>
        <StyledMoviePoster src={path} />
        <div>{display.overview}</div>
        <MovieDetails display={display} credits={credits} kind={kind} />
      </StyledMovieInfo>
      <InteractionCard movie={display} isMovie={kind === "movie"} gap="20px" />
    </StyledMovieInfoContainer>
  );
};

export default MovieInfo;
