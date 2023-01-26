import ActorsSlider from "./ActorsSlider";

import {
  StyledActorsSection,
  StyledSectionName,
} from "../../components/styles/shared/DetailsPage/DetailsPage.style";

const ActorsSection = ({ movie }) => {
  return (
    <StyledActorsSection>
      <StyledSectionName>ACTORS</StyledSectionName>
      <ActorsSlider movie={movie} />
    </StyledActorsSection>
  );
};

export default ActorsSection;
