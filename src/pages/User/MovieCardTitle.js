import React from "react";
import { useNavigate } from "react-router-dom";

import MovieCardRate from "../../components/MovieCardRate";

import { StyledMovieCardTitle } from "./User.style";

const MovieCardTitle = ({ movie, isMovie }) => {
  const navigate = useNavigate();
  return (
    <StyledMovieCardTitle>
      <MovieCardRate movie={movie} isMovie={isMovie} />
      <div onClick={() => navigate(`/${movie.id}`)}>
        {movie.title || movie.name}
      </div>
      <div onClick={() => navigate(`/${movie.id}`)}>
        (
        {movie.release_date
          ? movie.release_date.slice(0, 4)
          : movie.first_air_date.slice(0, 4)}
        )
      </div>
    </StyledMovieCardTitle>
  );
};

export default MovieCardTitle;
