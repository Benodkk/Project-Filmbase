import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";

import { StyledResults, StyledOneResult } from "./SearchingBar.style";

const Trending = ({ results, kind }) => {
  return (
    <StyledResults>
      {results.map((result) => (
        <StyledOneResult key={result.id}>
          <MovieCard movie={result} isLink={true} kind={kind} />
          <Link to={`/${kind}/${result.id}`}>
            {result.title || result.name}
          </Link>
        </StyledOneResult>
      ))}
    </StyledResults>
  );
};

export default Trending;
