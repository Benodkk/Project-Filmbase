import ShowCardTrigger from "./ShowCardTrigger";

import { StyledMovieImg } from "../styles/shared/HiddenCard/MovieImg.style";

const MovieImg = ({ movie, cardWidth }) => {
  let height = `${cardWidth * 1.42}rem`;
  return (
    <div style={{ zIndex: 2 }}>
      <ShowCardTrigger movie={movie} cardWidth={cardWidth} />
      <StyledMovieImg
        alt={movie.title}
        src={movie.img}
        width={`${cardWidth}rem`}
        height={height}
      />
    </div>
  );
};

export default MovieImg;
