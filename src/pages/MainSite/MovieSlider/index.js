import { useState } from "react";
import { StyledVerticalContainer } from "../../../components/styles/shared/Container.style";
import { BoxShadow } from "../../../components/styles/shared/MainSite/MovieSlider/Slider.style";
import { StyledSelectionTitle } from "../../../components/styles/shared/SelectionTitle.style";
import SelectType from "../SelectType";
import Slider from "./Slider";

const MovieSlider = () => {
  const [sliderType, setSliderType] = useState("movies");

  const types = [
    { label: "movies", value: "Movies" },
    { label: "series", value: "Tv series" },
  ];

  return (
    <StyledVerticalContainer
      padding="3rem"
      BGcolor="black"
      color="white"
      gap="20px"
    >
      <StyledSelectionTitle>MOST POPULAR</StyledSelectionTitle>
      <SelectType
        sliderType={sliderType}
        setSliderType={setSliderType}
        types={types}
      />
      <Slider sliderType={sliderType} />
    </StyledVerticalContainer>
  );
};

export default MovieSlider;
