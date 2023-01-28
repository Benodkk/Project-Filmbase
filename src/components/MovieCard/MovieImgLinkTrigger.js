import { useNavigate } from "react-router-dom";

import ShowCardTrigger from "./ShowCardTrigger";

import {
  StyledMovieImgLink,
  StyledMovieImgContainer,
} from "../styles/shared/MovieCard/MovieImg.style";

const MovieImgLinkTrigger = ({ movie, cardWidth, setIsHovered, isLink }) => {
  const navigate = useNavigate();
  let height = `${cardWidth * 1.42}px`;

  return (
    <StyledMovieImgContainer cardWidth={`${cardWidth}px`} maxHeight={height}>
      <ShowCardTrigger
        movie={movie}
        cardWidth={cardWidth}
        trigger={() => (isLink ? setIsHovered(true) : "")}
      />
      <StyledMovieImgLink
        alt={movie.title}
        src={movie.img}
        isLink={isLink}
        height={height}
        width={`${cardWidth}px`}
        onClick={() => (isLink ? navigate(`/${movie.id}`) : "")}
      />
    </StyledMovieImgContainer>
  );
};

export default MovieImgLinkTrigger;
