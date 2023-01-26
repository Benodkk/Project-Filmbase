import {
  StyledMovieImgLink,
  StyledMovieImgContainer,
} from "../styles/shared/MovieImg.style";
import { Link } from "react-router-dom";

const MovieImgLink = ({ movie, cardWidth }) => {
  let height = `${cardWidth * 1.42}px`;
  return (
    <StyledMovieImgContainer cardWidth={`${cardWidth}px`} maxHeight={height}>
      <Link to={`/${movie.id}`}>
        <StyledMovieImgLink
          alt={movie.title}
          src={movie.img}
          height={height}
          width={`${cardWidth}px`}
        />
      </Link>
    </StyledMovieImgContainer>
  );
};

export default MovieImgLink;
