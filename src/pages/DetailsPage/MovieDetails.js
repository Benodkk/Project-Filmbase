import React from "react";

import countries from "iso-3166-1-alpha-2";

import {
  StyledFirstDiv,
  StyledMovieDetails,
  StyledMovieDetailsContainer,
} from "./DetailsPage.style";

const MovieDetails = ({ display, credits, kind }) => {
  const director = credits.crew.filter((people) => people.job === "Director");
  const writer = credits.crew.filter((people) => people.job === "Screenplay");
  return (
    <StyledMovieDetailsContainer>
      {kind === "movie" ? (
        <StyledMovieDetails>
          <StyledFirstDiv>Director</StyledFirstDiv>
          <div>{director.map((element) => element.name).join(", ")}</div>
          <StyledFirstDiv>Writer</StyledFirstDiv>
          <div>{writer.map((element) => element.name).join(", ")}</div>
          <StyledFirstDiv>Genre</StyledFirstDiv>
          <div>{display.genres.map((element) => element.name).join(", ")}</div>
          <StyledFirstDiv>Released:</StyledFirstDiv>
          <div>{display.release_date}</div>
        </StyledMovieDetails>
      ) : kind === "tv" ? (
        <StyledMovieDetails>
          <StyledFirstDiv>Production</StyledFirstDiv>
          <div>
            {display.origin_country ? (
              display.origin_country
                .map((element) => countries.getCountry(element))
                .join(", ")
            ) : (
              <></>
            )}
          </div>
          <StyledFirstDiv>Genre</StyledFirstDiv>
          <div>{display.genres.map((element) => element.name).join(", ")}</div>
          <StyledFirstDiv>Premiere:</StyledFirstDiv>
          <div>{display.first_air_date}</div>
        </StyledMovieDetails>
      ) : (
        <></>
      )}
    </StyledMovieDetailsContainer>
  );
};

export default MovieDetails;
