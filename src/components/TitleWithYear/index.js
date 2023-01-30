import React from "react";
import { Link } from "react-router-dom";

import { StyledTitleWithYear } from "../styles/shared/TitleWithYear/TitleWithYear.style";

const TitleWithYear = ({ movie, isColumn }) => {
  return (
    <StyledTitleWithYear isColumn={isColumn}>
      <Link to={`/${movie.id}`}>{movie.title}</Link>
      <div>{movie.realsed.slice(0, 4)}</div>
    </StyledTitleWithYear>
  );
};
export default TitleWithYear;
