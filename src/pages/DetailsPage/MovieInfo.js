import MovieImg from "../../components/MovieCard/MovieImg";
import { StyledMovieInfoContainer } from "../../components/styles/shared/DetailsPage/DetailsPage.style";
import RightSideCard from "../UserList/RightSideCard";
import MovieDetails from "./MovieDetails";

const MovieInfo = ({ movie }) => {
  return (
    <StyledMovieInfoContainer>
      <MovieImg movie={movie} cardWidth={200} />
      <MovieDetails movie={movie} />
      <RightSideCard movie={movie} />
    </StyledMovieInfoContainer>
  );
};

export default MovieInfo;
