import { useNavigate } from "react-router-dom";

import {
  StyledMovieImgLink,
  StyledMovieImgContainer,
} from "../styles/shared/MovieCard/MovieImg.style";

const MovieImgLink = ({ movie, cardWidth }) => {
  const navigate = useNavigate();
  let height = `${cardWidth * 1.42}px`;
  return (
    <StyledMovieImgContainer cardWidth={`${cardWidth}px`} maxHeight={height}>
      <StyledMovieImgLink
        isLink={true}
        onClick={() => navigate(`/${movie.id}`)}
        alt={movie.title}
        src={movie.img}
        height={height}
        width={`${cardWidth}px`}
      />
    </StyledMovieImgContainer>
  );
};

export default MovieImgLink;
