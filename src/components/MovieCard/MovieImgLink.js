import {
  StyledMovieImgLink,
  StyledMovieImgContainer,
} from "../styles/shared/MovieImg.style";
import { Link } from "react-router-dom";

const MovieImgLink = ({ movie, cardWidth }) => {
  let height = `${cardWidth * 1.42}rem`;
  return (
    <StyledMovieImgContainer cardWidth={`${cardWidth}rem`} maxHeight={height}>
      <Link to={`/${movie.id}`}>
        <StyledMovieImgLink
          alt={movie.title}
          src={movie.img}
          height={height}
          width={`${cardWidth}rem`}
        />
      </Link>
    </StyledMovieImgContainer>
  );
};

export default MovieImgLink;
