import { useState } from "react";

import MovieImgLink from "./MovieImgLink";
import HiddenCard from "./HiddenCard";

const MovieCard = ({ movie, cardWidth }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <HiddenCard
        movie={movie}
        cardWidth={cardWidth}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <MovieImgLink
        movie={movie}
        cardWidth={cardWidth}
        setIsHovered={setIsHovered}
      />
    </div>
  );
};

export default MovieCard;
