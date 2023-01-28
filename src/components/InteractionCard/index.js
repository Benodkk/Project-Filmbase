import { useState } from "react";

import { useSelector } from "react-redux";

import OpinionRow from "./OpinionRow";
import RateStars from "./RateStars";
import WatchItBtn from "./WatchItBtn";

import { StyledInteractionCard } from "../styles/shared/InteractionCard/InteractionCard.style";

const InteractionCard = ({ movie, gap }) => {
  const store = useSelector((state) => state);

  const [starHover, setStarHover] = useState(false);
  const ratedMovie = store.movies.find(
    (movieInStore) => movieInStore.id === movie.id
  );

  return (
    <StyledInteractionCard gap={gap}>
      <OpinionRow movie={movie} ratedMovie={ratedMovie} starHover={starHover} />
      <RateStars
        movie={movie}
        ratedMovie={ratedMovie}
        starHover={starHover}
        setStarHover={setStarHover}
      />
      <WatchItBtn movie={movie} ratedMovie={ratedMovie} />
    </StyledInteractionCard>
  );
};
export default InteractionCard;
