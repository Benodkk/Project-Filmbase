import { useSelector } from "react-redux";
import { useState } from "react";

import { useTheme } from "styled-components";

import starBlack from "../../assets/star-black.png";
import eyeWhite from "../../assets/eye-white.png";

import StyledShowCardTrigger from "../styles/shared/HiddenCard/ShowCardTrigger.style";

const ShowCardTrigger = ({ movie, cardWidth, trigger }) => {
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
      width={`${cardWidth / 6}px`}
      height={`${cardWidth / 4}px`}
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
