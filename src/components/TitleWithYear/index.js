import React from "react";
import { Link } from "react-router-dom";

import { StyledTitleWithYear } from "./TitleWithYear.style";

const TitleWithYear = ({ movie, isColumn, isMovie }) => {
  return (
    <StyledTitleWithYear isColumn={isColumn}>
      <Link to={`/${isMovie ? "movie/" : "tv/"}${movie.id}`}>
        {movie.title || movie.name}
      </Link>
      <div>{(movie.release_date || movie.first_air_date).slice(0, 4)}</div>
    </StyledTitleWithYear>
  );
};
export default TitleWithYear;
