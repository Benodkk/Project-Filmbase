import React from "react";

import StarRating from "../../components/StarRating";
import TitleWithYear from "../../components/TitleWithYear";

import { reactDevice } from "../../styles/deviceWidth";
import { useMediaQuery } from "react-responsive";
import { StyledLeftSide } from "./UserList.style";

const LeftSideCard = ({ movie, isMovie }) => {
  const isTablet = useMediaQuery(reactDevice.tablet);
  return (
    <StyledLeftSide>
      <TitleWithYear isColumn={!isTablet} movie={movie} isMovie={isMovie} />
      <StarRating row={!isTablet} movie={movie} />
    </StyledLeftSide>
  );
};

export default LeftSideCard;
