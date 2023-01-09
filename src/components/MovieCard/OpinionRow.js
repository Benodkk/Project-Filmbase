import { useState } from "react";

import { useDispatch } from "react-redux";
import { like } from "../../redux";

import ratesDescription from "../../database/ratesDescription";

import user from "../../assets/user.png";
import heartBlackEmpty from "../../assets/heart-black-empty.png";
import heartGold from "../../assets/heart-gold.png";
import heartYellow from "../../assets/heart-yellow.png";

import StyledHorizontalSpace from "../styles/shared/HorizotalSpace.style";
import StyledOpinionRow from "../styles/shared/HiddenCard/OpinionRow.style";
import {
  StyledUserCircle,
  StyledOpinionCircle,
} from "../styles/shared/HiddenCard/OpinionCircle.style";

const OpinionRow = ({ movie, ratedMovie, starHover }) => {
  const dispatch = useDispatch();
  const [heartHover, setHeartHover] = useState(false);

  const heartSrc = () =>
    heartHover
      ? heartYellow
      : ratedMovie && ratedMovie.like
      ? heartGold
      : heartBlackEmpty;

  const rate = () => {
    if (starHover) {
      return ratesDescription.find((rate) => rate.value === starHover)
        .description;
    }
    if (ratedMovie && ratedMovie.rate !== null) {
      return ratesDescription.find((rate) => rate.value === ratedMovie.rate)
        .description;
    }
    return "My opinion";
  };

  return (
    <StyledHorizontalSpace>
      <StyledOpinionRow>
        <StyledUserCircle>
          <img src={user} />
        </StyledUserCircle>
        <StyledOpinionCircle scale={!starHover ? "scale(0)" : "scale(1)"}>
          {starHover !== 0 ? starHover : ""}
        </StyledOpinionCircle>
        <div>{rate()}</div>
      </StyledOpinionRow>
      <img
        alt="heart"
        src={heartSrc()}
        onMouseEnter={() => setHeartHover(true)}
        onMouseLeave={() => setHeartHover(false)}
        onClick={() => dispatch(like(movie.id))}
      />
    </StyledHorizontalSpace>
  );
};

export default OpinionRow;
