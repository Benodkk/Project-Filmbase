import React from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API/config";
import poster from "../../assets/poster.png";

import {
  StyledActorsContainer,
  StyledActorsSection,
  StyledSectionName,
  StyledOneActor,
  StyledActorName,
  StyledActorImage,
  StyledCharacterName,
} from "./DetailsPage.style";

const ActorsSection = ({ credits }) => {
  return (
    <StyledActorsSection>
      <StyledSectionName>ACTORS</StyledSectionName>
      <StyledActorsContainer full={credits.cast.length >= 6}>
        {credits.cast.slice(0, 6).map((actor) => {
          return (
            <StyledOneActor key={actor.id}>
              <StyledActorImage
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : poster
                }
              />
              <StyledActorName>{actor.name}</StyledActorName>
              <StyledCharacterName>{actor.character}</StyledCharacterName>
            </StyledOneActor>
          );
        })}
      </StyledActorsContainer>
    </StyledActorsSection>
  );
};

export default ActorsSection;
