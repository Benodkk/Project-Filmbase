import React from "react";

import db from "../../database/db.json";

import MovieImg from "../../components/MovieCard/MovieImg";

import {
  StyledActorsContainer,
  StyledActorsSection,
  StyledSectionName,
  StyledOneActor,
  StyledActorName,
} from "../../components/styles/shared/DetailsPage/DetailsPage.style";

const ActorsSection = ({ movie }) => {
  const actors = [];
  movie.actors.map((actorId) => {
    actors.push(db.actors.find((actor) => actor.id === actorId));
  });

  return (
    <StyledActorsSection>
      <StyledSectionName>ACTORS</StyledSectionName>
      <StyledActorsContainer>
        {actors.map((actor) => {
          return (
            <StyledOneActor key={actor.id}>
              <MovieImg movie={actor} />
              <StyledActorName>{actor.name}</StyledActorName>
            </StyledOneActor>
          );
        })}
      </StyledActorsContainer>
    </StyledActorsSection>
  );
};

export default ActorsSection;
