import { StyledVerticalContainer } from "../../../components/styles/shared/Container.style";
import { StyledSelectionTitle } from "../../../components/styles/shared/SelectionTitle.style";
import SelectType from "../SelectType";
import { useState } from "react";
import RankingSectionContainer from "./RankingSectionContainer";
const RankingSection = () => {
  const [sliderType, setSliderType] = useState("movies");

  const types = [
    { label: "popular", value: "Most Popular" },
    { label: "movies", value: "Movies" },
    { label: "series", value: "Tv series" },
  ];

  return (
    <StyledVerticalContainer shrink={true} padding="3rem" gap="20px">
      <StyledSelectionTitle>RANKINGS</StyledSelectionTitle>
      <SelectType
        sliderType={sliderType}
        setSliderType={setSliderType}
        types={types}
      />
      <RankingSectionContainer sliderType={sliderType} />
    </StyledVerticalContainer>
  );
};
export default RankingSection;
