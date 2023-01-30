import React from "react";

import db from "../../database/db.json";

import {
  StyledFirstDiv,
  StyledMovieDetails,
  StyledMovieDetailsContainer,
} from "../../components/styles/shared/DetailsPage/DetailsPage.style";

const MovieDetails = ({ movie }) => {
  const director = db.directors.find(
    (director) => director.id === movie.director
  );
  const writer = db.writers.find((writer) => writer.id === movie.writer);
  return (
    <StyledMovieDetailsContainer>
      <div>{movie.description}</div>
      <StyledMovieDetails>
        <StyledFirstDiv>Director</StyledFirstDiv>
        <div>{director.name}</div>
        <StyledFirstDiv>Writer</StyledFirstDiv>
        <div>{writer.name}</div>
        <StyledFirstDiv>Genre</StyledFirstDiv>
        <div>{movie.genre}</div>
        <StyledFirstDiv>Released:</StyledFirstDiv>
        <div>{movie.realsed.slice(0, 10)}</div>
      </StyledMovieDetails>
    </StyledMovieDetailsContainer>
  );
};

export default MovieDetails;
