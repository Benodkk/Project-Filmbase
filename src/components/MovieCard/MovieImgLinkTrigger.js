import React from "react";

import { useNavigate } from "react-router-dom";

import ShowCardTrigger from "./ShowCardTrigger";

import {
  StyledMovieImgLink,
  StyledMovieImgContainer,
} from "../styles/shared/MovieCard/MovieImg.style";

const MovieImgLinkTrigger = ({ movie, setIsHovered, isLink }) => {
  const navigate = useNavigate();

  return (
    <StyledMovieImgContainer>
      <ShowCardTrigger
        movie={movie}
        trigger={() => (isLink ? setIsHovered(true) : "")}
      />
      <StyledMovieImgLink
        alt={movie.title}
        src={movie.img}
        isLink={isLink}
        onClick={() => (isLink ? navigate(`/${movie.id}`) : "")}
      />
    </StyledMovieImgContainer>
  );
};

export default MovieImgLinkTrigger;
