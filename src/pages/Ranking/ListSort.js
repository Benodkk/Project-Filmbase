import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import arrowDown from "../../assets/arrow-down.png";
import { sortList } from "../../database/dataRanking";

import {
  StyledSortElement,
  StyledSortLabel,
  StyledSelectSort,
  StyledSortValues,
  StyledSortContainer,
  StyledSortListContainer,
  StyledSortList,
  StyledSelectArrow,
  StyledSort,
} from "./Ranking.style";

const ListSort = ({ kind, sort, genre }) => {
  const navigate = useNavigate();
  const [showList, setShowList] = useState(false);

  return (
    <StyledSortContainer>
      <StyledSelectSort onClick={() => setShowList(!showList)}>
        <StyledSortValues flexDirection="row" alignItems="center">
          <StyledSortLabel>
            {
              sortList.find((x) => x.values.find((y) => y.linkValue === sort))
                .label
            }
          </StyledSortLabel>
          <div>
            {
              sortList
                .flatMap((x) => x.values)
                .find((y) => y.linkValue === sort).label
            }
          </div>
        </StyledSortValues>
        <StyledSelectArrow show={showList} src={arrowDown} />
      </StyledSelectSort>
      <div>
        <StyledSortListContainer show={showList}>
          <StyledSortList show={showList}>
            {sortList.map((element) => {
              return (
                <StyledSortElement key={element.label}>
                  <StyledSortLabel>{element.label}</StyledSortLabel>
                  <StyledSortValues>
                    {element.values.map((sortValue) => {
                      return (
                        <StyledSort
                          key={sortValue.label}
                          onClick={() =>
                            navigate(
                              `/ranking/${kind}/${sortValue.linkValue}/${genre}/1`
                            )
                          }
                        >
                          {sortValue.label}
                        </StyledSort>
                      );
                    })}
                  </StyledSortValues>
                </StyledSortElement>
              );
            })}
          </StyledSortList>
        </StyledSortListContainer>
      </div>
    </StyledSortContainer>
  );
};
export default ListSort;
