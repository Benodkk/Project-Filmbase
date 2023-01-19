import ShowCardTrigger from "./ShowCardTrigger";

import { StyledMovieImg } from "../styles/shared/MovieImg.style";

const MovieImgTrigger = ({ movie, cardWidth }) => {
  let height = `${cardWidth * 1.42}px`;
  return (
    <div style={{ zIndex: 1 }}>
      <ShowCardTrigger movie={movie} cardWidth={cardWidth} />
      <StyledMovieImg
        alt={movie.title}
        src={movie.img}
        width={`${cardWidth}px`}
        height={height}
      />
    </div>
  );
};

export default MovieImgTrigger;
