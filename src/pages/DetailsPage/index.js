import { useParams } from "react-router-dom";

import db from "../../database/db.json";

import { StyledPageContainer } from "../../components/styles/shared/Container.style";
import WelcomeMovieSection from "./WelcomeMovieSection";
import MovieInfo from "./MovieInfo";
import ActorsSection from "./ActorsSection";

const DetailsPage = () => {
  const { kind } = useParams();

  const movie = db.movies
    .concat(db.tvSeries)
    .find((element) => element.id === kind);

  console.log(movie);
  return (
    <StyledPageContainer>
      <WelcomeMovieSection movie={movie} />
      <MovieInfo movie={movie} />
      <ActorsSection movie={movie} />
    </StyledPageContainer>
  );
};
export default DetailsPage;
