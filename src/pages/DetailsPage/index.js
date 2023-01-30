import React from "react";
import { useParams } from "react-router-dom";

import db from "../../database/db.json";

import MovieInfo from "./MovieInfo";
import ActorsSection from "./ActorsSection";
import WelcomeMovieSection from "./WelcomeMovieSection";

import { StyledPageContainer } from "../../components/styles/shared/Container.style";

const DetailsPage = () => {
  const { kind } = useParams();

  const movie = db.movies
    .concat(db.tvSeries)
    .find((element) => element.id === kind);

  return (
    <StyledPageContainer>
      <WelcomeMovieSection movie={movie} />
      <MovieInfo movie={movie} />
      <ActorsSection movie={movie} />
    </StyledPageContainer>
  );
};
export default DetailsPage;
