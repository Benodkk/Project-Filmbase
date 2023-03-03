import React from "react";

import { useDispatch } from "react-redux";
import { rateMovie } from "../../redux";

import ratesDescription from "../../database/ratesDescription";

import starBlackEmpty from "../../assets/start-black-empty.png";
import starYellow from "../../assets/star-yellow.png";
import starGold from "../../assets/star-gold.png";
import starGoldEmpty from "../../assets/star-gold-empty.png";
import starGrey from "../../assets/star-grey.png";
import { StyledLikeImage } from "./InteractionCard.style";

const RateStars = ({ movie, ratedMovie, starHover, setStarHover, isMovie }) => {
  const dispatch = useDispatch();

  const starSrc = (rating) => {
    // star on starHover
    if (starHover >= rating) {
      return starYellow;
    }
    // if movie is rated, on starHover
    if (starHover && ratedMovie) {
      if (starHover <= rating && ratedMovie.rate >= rating) {
        return starGoldEmpty;
      }
    }
    // if movie is rated, no starHover
    if (!starHover && ratedMovie) {
      if (ratedMovie.rate >= rating) {
        return starGold;
      }
      if (ratedMovie.rate !== null) {
        return starGrey;
      }
    }
    return starBlackEmpty;
  };

  return (
    <div>
      {ratesDescription.map((rating) => (
        <StyledLikeImage
          width="10%"
          key={rating.value}
          alt="star"
          src={starSrc(rating.value)}
          onMouseEnter={() => setStarHover(rating.value)}
          onMouseLeave={() => setStarHover(false)}
          onClick={() => dispatch(rateMovie(movie.id, isMovie, rating.value))}
        />
      ))}
    </div>
  );
};

export default RateStars;
