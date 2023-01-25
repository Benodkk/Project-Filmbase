import { useState } from "react";

import ListFilter from "./ListFilter";
import ListType from "./ListType";

import { databaseType } from "./dataRanking";

import { StyledListHeaderContainer } from "../../components/styles/shared/Container.style";
import { StyledSelectionTitle } from "../../components/styles/shared/SelectionTitle.style";
import { StyledBottomHeader } from "../../components/styles/shared/Ranking/Ranking.style";

const ListHeader = ({ kind, sort, genre }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <StyledListHeaderContainer BGcolor="black" color="white" gap="20px">
      <StyledSelectionTitle>
        {databaseType.find((database) => database.type === kind).title}
      </StyledSelectionTitle>
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
        />
      </StyledBottomHeader>
    </StyledListHeaderContainer>
  );
};
export default ListHeader;
