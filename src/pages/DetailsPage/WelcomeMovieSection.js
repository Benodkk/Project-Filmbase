import moviePage from "../../assets/movie-page.jpg";
import starGold from "../../assets/star-gold.png";

import { useTheme } from "styled-components";
import {
  StyledTitle,
  StyledType,
  StyledWelcomeMovieContainer,
  StyledWelcomeMovieSection,
} from "../../components/styles/shared/DetailsPage/DetailsPage.style";
import { StyledDiv } from "../../components/styles/shared/Div.style";
import { StyledImage } from "../../components/styles/shared/Image.style";
import { StyledHorizontalRow } from "../../components/styles/shared/HorizotalSpace.style";
import { StyledVerticalContainer } from "../../components/styles/shared/Container.style";

const WelcomeMovieSection = ({ movie }) => {
  const theme = useTheme();
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
        <StyledHorizontalRow gap="10px" alignItems="flex-end">
          <StyledHorizontalRow gap="5px" alignItems="flex-end">
            <StyledImage width="40px" src={starGold} />
            <StyledDiv fontSize="32px">
              {movie.rating.toFixed(2).toString().replace(".", ",")}
            </StyledDiv>
          </StyledHorizontalRow>
          <StyledVerticalContainer>
            <StyledDiv color={theme.colors.grey} fontSize="14px">
              {movie.numberOfRatings.toLocaleString("pl-PL")}
            </StyledDiv>
            <StyledDiv color={theme.colors.grey} fontSize="14px">
              ratings
            </StyledDiv>
          </StyledVerticalContainer>
        </StyledHorizontalRow>
      </StyledWelcomeMovieContainer>
    </StyledWelcomeMovieSection>
  );
};
export default WelcomeMovieSection;
