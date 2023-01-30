import React from "react";

import StarRating from "../../components/StarRating";
import TitleWithYear from "../../components/TitleWithYear";

import { reactDevice } from "../../components/styles/deviceWidth";
import { useMediaQuery } from "react-responsive";
import { StyledLeftSide } from "../../components/styles/shared/UserList/UserList.style";

const LeftSideCard = ({ movie }) => {
  const isTablet = useMediaQuery(reactDevice.tablet);
  return (
    <StyledLeftSide>
      <TitleWithYear isColumn={!isTablet} movie={movie} />
      <StarRating row={!isTablet} movie={movie} />
    </StyledLeftSide>
  );
};

export default LeftSideCard;
