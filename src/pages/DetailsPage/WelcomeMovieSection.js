import React from "react";

import StarRating from "../../components/StarRating";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API/config";
import moviePoster from "../../assets/movie-page.jpg";

import {
  StyledTitle,
  StyledType,
  StyledWelcomeMovieContainer,
  StyledWelcomeMovieSection,
  StyledWelcomeDetails,
} from "./DetailsPage.style";

const WelcomeMovieSection = ({ display, kind }) => {
  const path = display.backdrop_path
    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${display.backdrop_path}`
    : moviePoster;

  const type = kind === "movie" ? "Movie" : kind === "tv" ? "Tv series" : "";

  return (
    <StyledWelcomeMovieSection>
      <StyledWelcomeMovieContainer photo={path}>
        <StyledWelcomeDetails>
          <StyledType>{type}</StyledType>
          <StyledTitle>{display.title || display.name}</StyledTitle>
          <StarRating movie={display} row={true} />
        </StyledWelcomeDetails>
      </StyledWelcomeMovieContainer>
    </StyledWelcomeMovieSection>
  );
};
export default WelcomeMovieSection;
