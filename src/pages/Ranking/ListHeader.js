import React, { useState } from "react";

import ListFilter from "./ListFilter";
import ListType from "./ListType";

import { databaseType } from "../../database/dataRanking";

import {
  StyledBottomHeader,
  StyledListHeaderContainer,
  StyledListTitle,
} from "./Ranking.style";

const ListHeader = ({ kind, sort, genre, genres }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <StyledListHeaderContainer>
      <StyledListTitle>
        {databaseType.find((database) => database.type === kind).title}
      </StyledListTitle>
      <StyledBottomHeader>
        <ListType
          kind={kind}
          sort={sort}
          setShowFilters={setShowFilters}
          showFilters={showFilters}
        />
        <ListFilter
          showFilters={showFilters}
          kind={kind}
          sort={sort}
          genre={genre}
          genres={genres}
        />
      </StyledBottomHeader>
    </StyledListHeaderContainer>
  );
};
export default ListHeader;
