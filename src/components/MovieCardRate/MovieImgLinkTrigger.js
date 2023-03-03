import React from "react";

import { useNavigate } from "react-router-dom";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API/config";

import ShowCardTrigger from "./ShowCardTrigger";

import {
  StyledMovieImgLink,
  StyledMovieImgContainer,
} from "./MovieCardRate.style";

const MovieImgLinkTrigger = ({ movie, setIsHovered, isLink, isMovie }) => {
  const navigate = useNavigate();

  const path = `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`;

  return (
    <StyledMovieImgContainer>
      <ShowCardTrigger
        movie={movie}
        trigger={() => (isLink ? setIsHovered(true) : "")}
      />
      <StyledMovieImgLink
        alt={movie.title}
        src={path}
        isLink={isLink}
        onClick={() =>
          isLink ? navigate(`/${isMovie ? "movie/" : "tv/"}${movie.id}`) : ""
        }
      />
    </StyledMovieImgContainer>
  );
};

export default MovieImgLinkTrigger;
