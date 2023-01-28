import starGold from "../../assets/star-gold.png";

import { StyledImage } from "../styles/shared/Image.style";
import {
  StyledRatingNumber,
  StyledStarRating,
  StyledStarRatingContainer,
} from "../styles/shared/StarRating/StarRating.style";

const StarRating = ({ movie, row }) => {
  return (
    <StyledStarRatingContainer row={row}>
      <StyledStarRating>
        <StyledImage width="40px" src={starGold} />
        <div>{movie.rating.toFixed(2).toString().replace(".", ",")}</div>
      </StyledStarRating>
      <StyledRatingNumber row={row}>
        <div>{movie.numberOfRatings.toLocaleString("pl-PL")}</div>
        <div>ratings</div>
      </StyledRatingNumber>
    </StyledStarRatingContainer>
  );
};

export default StarRating;
