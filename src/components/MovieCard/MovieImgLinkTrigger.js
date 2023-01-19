import ShowCardTrigger from "./ShowCardTrigger";

import {
  StyledMovieImgLink,
  StyledMovieImgContainer,
} from "../styles/shared/MovieImg.style";
import { Link } from "react-router-dom";

const MovieImgLinkTrigger = ({ movie, cardWidth, setIsHovered }) => {
  let height = `${cardWidth * 1.42}px`;
  return (
    <StyledMovieImgContainer cardWidth={`${cardWidth}px`} maxHeight={height}>
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
          width={`${cardWidth}px`}
        />
      </Link>
    </StyledMovieImgContainer>
  );
};

export default MovieImgLinkTrigger;
