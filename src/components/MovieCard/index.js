import React from "react";

import { useNavigate } from "react-router-dom";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API/config";
import poster from "../../assets/poster.png";

import { StyledMovieImgLink, StyledMovieImgContainer } from "./MovieCard.style";

const MovieCard = ({ movie, isLink, kind }) => {
  const navigate = useNavigate();

  const path = movie.poster_path
    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
    : poster;

  return (
    <StyledMovieImgContainer>
      <StyledMovieImgLink
        alt={movie.title}
        src={path}
        isLink={isLink}
        onClick={() => (isLink ? navigate(`/${kind}/${movie.id}`) : "")}
      />
    </StyledMovieImgContainer>
  );
};

export default MovieCard;
