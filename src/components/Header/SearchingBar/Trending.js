import React from "react";
import { Link } from "react-router-dom";

import MovieImgLink from "../../MovieCard/MovieImgLink";

import {
  StyledResults,
  StyledOneResult,
} from "../../styles/shared/Header/SearchingBar.style";

const Trending = ({ results }) => {
  return (
    <StyledResults>
      {results.map((result) => (
        <StyledOneResult key={result.id}>
          <MovieImgLink movie={result} />
          <Link to={`/${result.id}`}>{result.title || result.name}</Link>
        </StyledOneResult>
      ))}
    </StyledResults>
  );
};

export default Trending;
