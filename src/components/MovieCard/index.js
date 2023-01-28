import { useState } from "react";

import MovieImgLinkTrigger from "./MovieImgLinkTrigger";
import HiddenCard from "./HiddenCard";

import { StyledBlackScreen } from "../styles/shared/MovieCard/HiddenCard.style";

const MovieCard = ({ movie, cardWidth }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <StyledBlackScreen
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered(false);
        }}
      />
      <HiddenCard movie={movie} cardWidth={cardWidth} isHovered={isHovered} />
      <MovieImgLinkTrigger
        movie={movie}
        cardWidth={cardWidth}
        setIsHovered={setIsHovered}
        isLink={true}
      />
    </div>
  );
};

export default MovieCard;
