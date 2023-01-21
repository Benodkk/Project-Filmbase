import { useNavigate } from "react-router-dom";

import genres from "../../database/genre";

import { useTheme } from "styled-components";
import { StyledHorizontalSpace } from "../../components/styles/shared/HorizotalSpace.style";
import {
  StyledFilterDiv,
  StyledFilterContainer,
} from "../../components/styles/shared/Ranking/Ranking.style";

const ListFilter = ({ showFilters, kind, sort, genre }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <StyledFilterContainer show={showFilters}>
      <StyledHorizontalSpace>
        <StyledFilterDiv
          color={theme.colors.grey}
          selected={genre === "no_filter" ? true : false}
          fontSize="14px"
          onClick={() => {
            navigate(`/ranking/${kind}/${sort}/no_filter/1`);
          }}
        >
          No filter
        </StyledFilterDiv>
        {genres.map((oneGenre) => {
          return (
            <StyledFilterDiv
              key={oneGenre}
              selected={oneGenre === genre ? true : false}
              fontSize="14px"
              onClick={() => {
                navigate(`/ranking/${kind}/${sort}/${oneGenre}/1`);
              }}
            >
              {oneGenre}
            </StyledFilterDiv>
          );
        })}
      </StyledHorizontalSpace>
    </StyledFilterContainer>
  );
};

export default ListFilter;
