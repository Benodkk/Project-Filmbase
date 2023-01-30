import React, { useRef } from "react";

import InteractionCard from "../InteractionCard";
import TitleWithYear from "../TitleWithYear";
import MovieImgLinkTrigger from "./MovieImgLinkTrigger";

import { reactDevice } from "../styles/deviceWidth";
import { useMediaQuery } from "react-responsive";
import {
  StyledHiddenCard,
  StyledHiddenCardInfo,
} from "../styles/shared/MovieCard/HiddenCard.style";

const HiddenCard = ({ movie, isHovered }) => {
  const ele2 = useRef(null);
  const isTablet = useMediaQuery(reactDevice.tablet);

  return (
    <StyledHiddenCard isHovered={isHovered}>
      {isTablet ? <MovieImgLinkTrigger movie={movie} isLink={false} /> : <></>}
      <StyledHiddenCardInfo isHovered={isHovered} ref={ele2}>
        <TitleWithYear movie={movie} />
        <InteractionCard movie={movie} gap="20px" />
      </StyledHiddenCardInfo>
    </StyledHiddenCard>
  );
};

export default HiddenCard;
