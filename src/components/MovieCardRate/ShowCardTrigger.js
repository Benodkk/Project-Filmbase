import React, { useState } from "react";

import { useSelector } from "react-redux";

import starBlack from "../../assets/star-black.png";
import eyeWhite from "../../assets/eye-white.png";

import { useTheme } from "styled-components";
import { StyledShowCardTrigger } from "./HiddenCard.style";

const ShowCardTrigger = ({ movie, trigger }) => {
  const store = useSelector((state) => state);
  const theme = useTheme();

  const ratedMovie = store.movies.find(
    (movieInStore) => movieInStore.id === movie.id
  );
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      trigger();
    }, 300);
    setTimeoutId(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
  };

  return (
    <StyledShowCardTrigger
      bgc={
        ratedMovie && ratedMovie.rate
          ? theme.colors.black
          : ratedMovie && ratedMovie.toWatch
          ? "green"
          : theme.colors.gold
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {ratedMovie && ratedMovie.rate ? (
        ratedMovie.rate
      ) : ratedMovie && ratedMovie.toWatch ? (
        <img alt="white eye" src={eyeWhite} />
      ) : (
        <img alt="black star" src={starBlack} />
      )}
    </StyledShowCardTrigger>
  );
};

export default ShowCardTrigger;
