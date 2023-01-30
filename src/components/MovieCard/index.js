import React, { useState } from "react";

import MovieImgLinkTrigger from "./MovieImgLinkTrigger";
import HiddenCard from "./HiddenCard";

import { StyledBlackScreen } from "../styles/shared/MovieCard/HiddenCard.style";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <StyledBlackScreen
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered(false);
        }}
      />
      <HiddenCard movie={movie} isHovered={isHovered} />
      <MovieImgLinkTrigger
        movie={movie}
        setIsHovered={setIsHovered}
        isLink={true}
      />
    </div>
  );
};

export default MovieCard;
