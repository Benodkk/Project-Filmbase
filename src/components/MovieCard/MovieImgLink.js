import React from "react";

import { useNavigate } from "react-router-dom";

import {
  StyledMovieImgLink,
  StyledMovieImgContainer,
} from "../styles/shared/MovieCard/MovieImg.style";

const MovieImgLink = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <StyledMovieImgContainer>
      <StyledMovieImgLink
        isLink={true}
        onClick={() => navigate(`/${movie.id}`)}
        alt={movie.title}
        src={movie.img}
      />
    </StyledMovieImgContainer>
  );
};

export default MovieImgLink;
