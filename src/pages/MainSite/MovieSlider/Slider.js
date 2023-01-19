import { useState, useEffect } from "react";

import db from "../../../database/db.json";

import {
  StyledSliderContainer,
  StyledSlider,
  BoxShadowLeft,
  BoxShadowRight,
  StyledElement,
  StyledSliderButton,
} from "../../../components/styles/shared/MainSite/MovieSlider/Slider.style";
import MovieCard from "../../../components/MovieCard";
import { StyledDiv } from "../../../components/styles/shared/Div.style";

let allData = db;

const Slider = ({ sliderType }) => {
  const [data, setData] = useState(allData.films.slice(0, 32));

  const sliderGap = 30;
  const cardWidth = 180;

  const [slideWidth, setSlideWidth] = useState();
  const [slide, setSlide] = useState(0);
  const [slideLimit, setSlideLimit] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let elementsNr = Math.floor(windowWidth / (sliderGap + cardWidth));

  useEffect(() => {
    const overflow = windowWidth / (sliderGap + cardWidth) - elementsNr;
    if (overflow > 0.3) {
      elementsNr += 1;
    }

    setSlideLimit(data.length / (elementsNr - 1) - 1);

    setSlideWidth((elementsNr - 1) * (sliderGap + cardWidth));

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useEffect(() => {
    setSlide(0);
    if (sliderType === "movies") setData(allData.films.slice(0, 32));
    if (sliderType === "series") setData(allData.tvSeries.slice(0, 32));
  }, [sliderType]);

  return (
    <StyledSliderContainer>
      <StyledSlider transform={slide * slideWidth || 0} gap={`${sliderGap}px`}>
        <BoxShadowLeft height="300px" transform={slide * slideWidth || 0} />
        <StyledSliderButton
          transform={slide * slideWidth || 0}
          onClick={() => setSlide(slide - 1)}
          visibility={slide === 0 ? "hidden" : "visible"}
        >
          {"<"}
        </StyledSliderButton>
        {data.map((element) => {
          return (
            <StyledElement gap="15px" key={element.id}>
              <MovieCard movie={element} cardWidth={cardWidth} />
              <StyledDiv>{element.title}</StyledDiv>
            </StyledElement>
          );
        })}
        <StyledSliderButton
          transform={slide * slideWidth || 0}
          right="true"
          onClick={() =>
            slideLimit > slide ? setSlide(slide + 1) : setSlide(slide)
          }
          visibility={slide >= slideLimit ? "hidden" : "visible"}
        >
          {">"}
        </StyledSliderButton>
        <BoxShadowRight height="300px" transform={slide * slideWidth || 0} />
      </StyledSlider>
    </StyledSliderContainer>
  );
};

export default Slider;
