import React from "react";

import starGold from "../../assets/star-gold.png";

import {
  StyledRatingNumber,
  StyledStar,
  StyledStarRating,
  StyledStarRatingContainer,
} from "./StarRating.style";

const StarRating = ({ movie, row }) => {
  return (
    <StyledStarRatingContainer row={row}>
      <StyledStarRating>
        <StyledStar src={starGold} />
        <div>{movie.vote_average.toFixed(2).toString().replace(".", ",")}</div>
      </StyledStarRating>
      <StyledRatingNumber row={row}>
        <div>{movie.vote_count.toLocaleString("pl-PL")}</div>
        <div>ratings</div>
      </StyledRatingNumber>
    </StyledStarRatingContainer>
  );
};

export default StarRating;
