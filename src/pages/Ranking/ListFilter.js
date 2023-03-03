import React from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "styled-components";
import {
  StyledFilterDiv,
  StyledFilterContainer,
  StyledFilterList,
} from "./Ranking.style";

const ListFilter = ({ showFilters, kind, sort, genre, genres }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <StyledFilterContainer show={showFilters}>
      <StyledFilterList>
        <StyledFilterDiv
          color={theme.colors.grey}
          selected={genre === "no_filter" ? true : false}
          forList={true}
          onClick={() => {
            navigate(`/ranking/${kind}/${sort}/no_filter/1`);
          }}
        >
          No filter
        </StyledFilterDiv>
        {genres.length > 0 ? (
          genres.map((oneGenre) => {
            return (
              <StyledFilterDiv
                key={oneGenre.id}
                selected={oneGenre.id === Number(genre) ? true : false}
                forList={true}
                onClick={() => {
                  navigate(`/ranking/${kind}/${sort}/${oneGenre.id}/1`);
                }}
              >
                {oneGenre.name}
              </StyledFilterDiv>
            );
          })
        ) : (
          <></>
        )}
      </StyledFilterList>
    </StyledFilterContainer>
  );
};

export default ListFilter;
