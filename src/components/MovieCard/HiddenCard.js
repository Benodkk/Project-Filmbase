import React, { useRef, useState, useEffect } from "react";

import InteractionCard from "../InteractionCard";
import TitleWithYear from "../TitleWithYear";
import MovieImgLinkTrigger from "./MovieImgLinkTrigger";

import {
  StyledHiddenCard,
  StyledHiddenCardInfo,
} from "../styles/shared/MovieCard/HiddenCard.style";

const HiddenCard = ({ movie, cardWidth, isHovered }) => {
  const [left, setLeft] = useState(false);

  const ele2 = useRef(null);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    const ele2Rect = ele2.current.getBoundingClientRect();
    setLeft(windowWidth < ele2Rect.right + ele2.current.offsetWidth + 90);
  }, [windowWidth, isHovered]);

  return (
    <StyledHiddenCard isHovered={isHovered}>
      <MovieImgLinkTrigger movie={movie} cardWidth={cardWidth} isLink={false} />
      <StyledHiddenCardInfo isHovered={isHovered} left={left} ref={ele2}>
        <TitleWithYear movie={movie} />
        <InteractionCard movie={movie} gap="20px" />
      </StyledHiddenCardInfo>
    </StyledHiddenCard>
  );
};

export default HiddenCard;
