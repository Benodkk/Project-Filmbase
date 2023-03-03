import React from "react";
import { useNavigate } from "react-router-dom";

import { databaseType } from "../../database/dataRanking";

import {
  StyledFilterBtn,
  StyledFilterDiv,
  StyledListType,
  StyledListTypeContainer,
} from "./Ranking.style";

const ListType = ({ kind, sort, setShowFilters, showFilters }) => {
  const navigate = useNavigate();
  return (
    <StyledListTypeContainer>
      <StyledListType>
        {databaseType.map((database) => {
          return (
            <StyledFilterDiv
              key={database.type}
              fontSize="18px"
              selected={kind === database.type ? true : false}
              onClick={() =>
                navigate(`/ranking/${database.type}/${sort}/no_filter/1`)
              }
            >
              {database.label}
            </StyledFilterDiv>
          );
        })}
      </StyledListType>
      <StyledFilterBtn
        show={kind === "movie" ? true : kind === "tv" ? true : false}
        onClick={() => setShowFilters(!showFilters)}
      >
        Filters
      </StyledFilterBtn>
    </StyledListTypeContainer>
  );
};

export default ListType;
