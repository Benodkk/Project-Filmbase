import { useNavigate } from "react-router-dom";

import { databaseType } from "./dataRanking";

import {
  StyledFilterBtn,
  StyledFilterDiv,
  StyledListType,
  StyledListTypeContainer,
} from "../../components/styles/shared/Ranking/Ranking.style";

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
        show={kind === "movies" ? true : kind === "tvSeries" ? true : false}
        onClick={() => setShowFilters(!showFilters)}
      >
        Filters
      </StyledFilterBtn>
    </StyledListTypeContainer>
  );
};

export default ListType;
