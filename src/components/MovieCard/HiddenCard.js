import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import MovieImgTrigger from "./MovieImgTrigger";
import WatchItBtn from "./WatchItBtn";
import RateStars from "./RateStars";
import OpinionRow from "./OpinionRow";

import {
  StyledHiddenCard,
  StyledHiddenCardInfo,
} from "../styles/shared/MovieCard/HiddenCard.style";

const HiddenCard = ({ movie, cardWidth, isHovered }) => {
  const store = useSelector((state) => state);

  const [starHover, setStarHover] = useState(false);
  const [left, setLeft] = useState(false);

  const ratedMovie = store.movies.find(
    (movieInStore) => movieInStore.id === movie.id
  );

  const ele2 = useRef(null);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    const ele2Rect = ele2.current.getBoundingClientRect();
    setLeft(windowWidth < ele2Rect.right + ele2.current.offsetWidth + 90);
  }, [windowWidth, isHovered]);

  return (
    <StyledHiddenCard isHovered={isHovered}>
      <MovieImgTrigger movie={movie} cardWidth={cardWidth} />
      <StyledHiddenCardInfo isHovered={isHovered} left={left} ref={ele2}>
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
