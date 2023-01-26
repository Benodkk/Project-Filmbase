import { useEffect, useState } from "react";

import db from "../../database/db.json";

import {
  StyledActorName,
  StyledOneActor,
  StyledSlider,
  StyledSliderButton,
  StyledSliderContainer,
} from "../../components/styles/shared/DetailsPage/DetailsPage.style";
import MovieImg from "../../components/MovieCard/MovieImg";

const ActorsSlider = ({ movie }) => {
  const [slide, setSlide] = useState(0);
  const [transform, setTransform] = useState(0);

  const actors = [];
  movie.actors.map((actorId) => {
    actors.push(db.actors.find((actor) => actor.id === actorId));
  });

  const cardWidth = 144;
  const gap = (1024 - 6 * cardWidth) / 5;
  const maxSlide = actors.length * cardWidth + (actors.length - 1) * gap;
  const maxSlides = Math.floor(maxSlide / 1024);

  useEffect(() => {
    console.log(slide);
    if (maxSlides !== 0) {
      if (slide === maxSlides) {
        setTransform((slide - 1) * 1024 + maxSlide - 1024);
      } else {
        setTransform(slide * 1024);
      }
    }
  }, [slide]);

  return (
    <StyledSliderContainer>
      <StyledSliderButton
        onClick={() => setSlide(slide - 1)}
        visibility={slide === 0 ? "hidden" : "visible"}
      >
        {"<"}
      </StyledSliderButton>
      <StyledSlider gap={`${gap}px`} transform={transform}>
        {actors.map((actor) => {
          return (
            <StyledOneActor width={cardWidth}>
              <MovieImg cardWidth={cardWidth} movie={actor} />
              <StyledActorName>{actor.name}</StyledActorName>
            </StyledOneActor>
          );
        })}
      </StyledSlider>
      <StyledSliderButton
        onClick={() => setSlide(slide + 1)}
        visibility={slide === maxSlides ? "hidden" : "visible"}
        right={true}
      >
        {">"}
      </StyledSliderButton>
    </StyledSliderContainer>
  );
};

export default ActorsSlider;
