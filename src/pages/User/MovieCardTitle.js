import React from "react";
import { useNavigate } from "react-router-dom";

import MovieCard from "../../components/MovieCard";

import { StyledMovieCardTitle } from "../../components/styles/shared/User/User.style";

const MovieCardTitle = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <StyledMovieCardTitle>
      <MovieCard movie={movie} />
      <div onClick={() => navigate(`/${movie.id}`)}>{movie.title}</div>
      <div onClick={() => navigate(`/${movie.id}`)}>
        ({movie.realsed.slice(0, 4)})
      </div>
    </StyledMovieCardTitle>
  );
};

export default MovieCardTitle;
