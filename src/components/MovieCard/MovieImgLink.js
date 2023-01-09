import ShowCardTrigger from "./ShowCardTrigger";

import { StyledMovieImgLink } from "../styles/shared/HiddenCard/MovieImg.style";
import { StyledMovieImgContainer } from "../styles/shared/HiddenCard/MovieImg.style";
import { Link } from "react-router-dom";

const MovieImgLink = ({ movie, cardWidth, setIsHovered }) => {
  let height = `${cardWidth * 1.42}rem`;
  return (
    <StyledMovieImgContainer cardWidth={`${cardWidth}rem`} maxHeight={height}>
      <ShowCardTrigger
        movie={movie}
        cardWidth={cardWidth}
        trigger={() => setIsHovered(true)}
      />
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
