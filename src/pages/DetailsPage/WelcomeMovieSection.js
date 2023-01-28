import StarRating from "../../components/StarRating";

import moviePage from "../../assets/movie-page.jpg";

import {
  StyledTitle,
  StyledType,
  StyledWelcomeMovieContainer,
  StyledWelcomeMovieSection,
} from "../../components/styles/shared/DetailsPage/DetailsPage.style";

const WelcomeMovieSection = ({ movie }) => {
  let type;
  if (movie.id.includes("film")) {
    type = "MOVIE";
  } else if (movie.id.includes("series")) {
    type = "TV SERIES";
  }

  return (
    <StyledWelcomeMovieSection>
      <StyledWelcomeMovieContainer photo={moviePage}>
        <StyledType>{type}</StyledType>
        <StyledTitle>{movie.title}</StyledTitle>
        <StarRating movie={movie} row={true} />
      </StyledWelcomeMovieContainer>
    </StyledWelcomeMovieSection>
  );
};
export default WelcomeMovieSection;
