import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";

import { StyledResults, StyledOneResult } from "./SearchingBar.style";

const Results = ({ results }) => {
  return (
    <StyledResults>
      {results.map((result) => (
        <StyledOneResult key={result.id}>
          <MovieCard
            movie={result}
            isLink={true}
            kind={result.title ? "movie" : "tv"}
          />
          <Link to={`${result.title ? "movie" : "tv"}/${result.id}`}>
            {result.title || result.name}
          </Link>
          <div>
            {(result.release_date || result.first_air_date).substring(0, 4)}
          </div>
        </StyledOneResult>
      ))}
    </StyledResults>
  );
};

export default Results;
