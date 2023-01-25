import { useState } from "react";

import { useSelector } from "react-redux";

import OpinionRow from "../../components/MovieCard/OpinionRow";
import RateStars from "../../components/MovieCard/RateStars";
import WatchItBtn from "../../components/MovieCard/WatchItBtn";

import { StyledRightSideCard } from "../../components/styles/shared/UserList/UserList.style";

const RightSideCard = ({ movie }) => {
  const store = useSelector((state) => state);

  const [starHover, setStarHover] = useState(false);
  const ratedMovie = store.movies.find(
    (movieInStore) => movieInStore.id === movie.id
  );

  return (
    <StyledRightSideCard>
      <OpinionRow movie={movie} ratedMovie={ratedMovie} starHover={starHover} />
      <RateStars
        movie={movie}
        ratedMovie={ratedMovie}
        starHover={starHover}
        setStarHover={setStarHover}
      />
      <WatchItBtn movie={movie} ratedMovie={ratedMovie} />
    </StyledRightSideCard>
  );
};
export default RightSideCard;
