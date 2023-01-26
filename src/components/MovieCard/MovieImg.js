import { StyledMovieImg } from "../styles/shared/MovieImg.style";

const MovieImg = ({ movie, cardWidth }) => {
  let height = `${cardWidth * 1.42}px`;
  return (
    <StyledMovieImg
      alt={movie.title || movie.name}
      src={movie.img}
      height={height}
      width={`${cardWidth}px`}
    />
  );
};

export default MovieImg;
