import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { like } from "../../redux";

import ratesDescription from "../../database/ratesDescription";

import userBlack from "../../assets/user-black.png";
import heartBlackEmpty from "../../assets/heart-black-empty.png";
import heartGold from "../../assets/heart-gold.png";
import heartYellow from "../../assets/heart-yellow.png";

import {
  StyledOpinionRow,
  StyledUserCircle,
  StyledOpinionCircle,
  StyledOpinionsRowContainer,
} from "../styles/shared/InteractionCard/InteractionCard.style";
import { StyledActionImage, StyledImage } from "../styles/shared/Image.style";

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
    <StyledOpinionsRowContainer>
      <StyledOpinionRow>
        <StyledUserCircle>
          <StyledImage src={userBlack} width="40px" />
        </StyledUserCircle>
        <StyledOpinionCircle scale={!starHover ? "scale(0)" : "scale(1)"}>
          {starHover !== 0 ? starHover : ""}
        </StyledOpinionCircle>
        <div>{rate()}</div>
      </StyledOpinionRow>
      <StyledActionImage
        width="10%"
        alt="heart"
        src={heartSrc()}
        onMouseEnter={() => setHeartHover(true)}
        onMouseLeave={() => setHeartHover(false)}
        onClick={() => dispatch(like(movie.id))}
      />
    </StyledOpinionsRowContainer>
  );
};

export default OpinionRow;
