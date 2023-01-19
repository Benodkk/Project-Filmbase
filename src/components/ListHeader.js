import genre from "../database/genre";

import { useTheme } from "styled-components";
import { StyledListHeaderContainer } from "./styles/shared/Container.style";
import { StyledHorizontalSpace } from "./styles/shared/HorizotalSpace.style";
import { StyledSelectionTitle } from "./styles/shared/SelectionTitle.style";
import { StyledFilterDiv } from "./styles/shared/Ranking/Ranking.style";

const ListHeader = ({ filtrGenre, setFiltrGenre, title }) => {
  const theme = useTheme();

  return (
    <StyledListHeaderContainer BGcolor="black" color="white" gap="20px">
      <StyledSelectionTitle>{title}</StyledSelectionTitle>
      <StyledHorizontalSpace>
        <StyledFilterDiv
          color={theme.colors.grey}
          selected={filtrGenre === "" ? true : false}
          onClick={() => setFiltrGenre("")}
        >
          No filter
        </StyledFilterDiv>
        {genre.map((genre) => {
          return (
            <StyledFilterDiv
              key={genre}
              selected={genre === filtrGenre ? true : false}
              onClick={() => setFiltrGenre(genre)}
            >
              {genre}
            </StyledFilterDiv>
          );
        })}
      </StyledHorizontalSpace>
    </StyledListHeaderContainer>
  );
};
export default ListHeader;
