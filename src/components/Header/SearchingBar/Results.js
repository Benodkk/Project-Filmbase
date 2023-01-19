import { Link } from "react-router-dom";

import MovieImgLink from "../../MovieCard/MovieImgLink";

import {
  StyledResults,
  StyledOneResult,
} from "../../styles/shared/Header/SearchingBar.style";

const Results = ({ results }) => {
  return (
    <StyledResults>
      {results.map((result) => (
        <StyledOneResult key={result.item.id} width={"14rem"}>
          <MovieImgLink cardWidth={14} movie={result.item} />
          <Link to={`/${result.item.id}`}>
            {result.item.title || result.item.name}
          </Link>
          <div>
            {result.item.realsed ? result.item.realsed.substring(0, 4) : ""}
          </div>
        </StyledOneResult>
      ))}
    </StyledResults>
  );
};

export default Results;
