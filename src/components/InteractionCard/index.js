import React, { useState } from "react";

import { useSelector } from "react-redux";

import OpinionRow from "./OpinionRow";
import RateStars from "./RateStars";
import WatchItBtn from "./WatchItBtn";

import { StyledInteractionCard } from "./InteractionCard.style";

const InteractionCard = ({ movie, gap, isMovie }) => {
  const store = useSelector((state) => state);

  const [starHover, setStarHover] = useState(false);
  const ratedMovie = store.movies.find(
    (movieInStore) => movieInStore.id === movie.id
  );

  return (
    <StyledInteractionCard gap={gap}>
      <OpinionRow
        movie={movie}
        ratedMovie={ratedMovie}
        starHover={starHover}
        isMovie={isMovie}
      />
      <RateStars
        movie={movie}
        ratedMovie={ratedMovie}
        starHover={starHover}
        setStarHover={setStarHover}
        isMovie={isMovie}
      />
      <WatchItBtn movie={movie} ratedMovie={ratedMovie} isMovie={isMovie} />
    </StyledInteractionCard>
  );
};
export default InteractionCard;
