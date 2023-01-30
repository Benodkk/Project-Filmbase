import React from "react";

import { StyledMovieImg } from "../styles/shared/MovieCard/MovieImg.style";

const MovieImg = ({ movie }) => {
  return <StyledMovieImg alt={movie.title || movie.name} src={movie.img} />;
};

export default MovieImg;
