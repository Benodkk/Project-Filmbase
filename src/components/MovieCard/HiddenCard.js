import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  StyledHiddenCard,
  StyledHiddenCardInfo,
} from "../styles/shared/HiddenCard/HiddenCard.style";

import MovieImg from "./MovieImg";
import WatchItBtn from "./WatchItBtn";
import RateStars from "./RateStars";
import OpinionRow from "./OpinionRow";

const HiddenCard = ({ movie, cardWidth, isHovered, setIsHovered }) => {
  const store = useSelector((state) => state);

  const [starHover, setStarHover] = useState(false);

  const ratedMovie = store.movies.find(
    (movieInStore) => movieInStore.id === movie.id
  );

  return (
    <StyledHiddenCard
      isHovered={isHovered}
      onMouseLeave={() => {
        setIsHovered(false);
        console.log("dupa");
      }}
    >
      <MovieImg movie={movie} cardWidth={cardWidth} />
      <StyledHiddenCardInfo isHovered={isHovered}>
        <div>
          <Link to={`/${movie.id}`}>{movie.title}</Link>{" "}
          {movie.realsed.substring(0, 4)}
        </div>
        <OpinionRow
          movie={movie}
          ratedMovie={ratedMovie}
          starHover={starHover}
        />
        <RateStars
          movie={movie}
          ratedMovie={ratedMovie}
          starHover={starHover}
          setStarHover={setStarHover}
        />
        <WatchItBtn movie={movie} ratedMovie={ratedMovie} />
      </StyledHiddenCardInfo>
    </StyledHiddenCard>
  );
};

export default HiddenCard;
