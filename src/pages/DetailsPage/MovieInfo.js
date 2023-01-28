import InteractionCard from "../../components/InteractionCard";
import MovieImg from "../../components/MovieCard/MovieImg";
import { StyledMovieInfoContainer } from "../../components/styles/shared/DetailsPage/DetailsPage.style";
import MovieDetails from "./MovieDetails";

const MovieInfo = ({ movie }) => {
  return (
    <StyledMovieInfoContainer>
      <MovieImg movie={movie} cardWidth={200} />
      <MovieDetails movie={movie} />
      <InteractionCard movie={movie} gap="20px" />
    </StyledMovieInfoContainer>
  );
};

export default MovieInfo;
