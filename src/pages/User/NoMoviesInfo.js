import React from "react";
import { Link } from "react-router-dom";

import { StyledAddToList, StyledNoMoviesInfo } from "./User.style";

const NoMoviesInfo = ({ kind }) => {
  return (
    <StyledNoMoviesInfo>
      <Link to={`/ranking/${kind}/rate_down/no_filter/1`}>
        <StyledAddToList>
          Add {kind === "movies" ? "movies" : "tv series"} to the list!
        </StyledAddToList>
      </Link>
    </StyledNoMoviesInfo>
  );
};

export default NoMoviesInfo;
