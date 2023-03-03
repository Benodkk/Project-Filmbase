import React, { useState } from "react";

import MovieImgLinkTrigger from "./MovieImgLinkTrigger";
import HiddenCard from "./HiddenCard";

import { StyledBlackScreen } from "./HiddenCard.style";

const MovieCardRate = ({ movie, isMovie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <StyledBlackScreen
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered(false);
        }}
      />
      <HiddenCard movie={movie} isHovered={isHovered} isMovie={isMovie} />
      <MovieImgLinkTrigger
        movie={movie}
        setIsHovered={setIsHovered}
        isLink={true}
        isMovie={isMovie}
      />
    </div>
  );
};

export default MovieCardRate;
