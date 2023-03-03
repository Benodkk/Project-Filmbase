import React from "react";

import MovieCardRate from "../../components/MovieCardRate";
import LeftSideCard from "./LeftSideCard";
import InteractionCard from "../../components/InteractionCard";

import { reactDevice } from "../../styles/deviceWidth";
import { useMediaQuery } from "react-responsive";
import {
  StyledList,
  StyledListCard,
  StyledListElement,
} from "./UserList.style";

const List = ({ list, isMovie }) => {
  const isTablet = useMediaQuery(reactDevice.tablet);
  return (
    <StyledList>
      {list.map((element) => {
        return (
          <StyledListElement key={element.id}>
            <MovieCardRate movie={element} isMovie={isMovie} />
            <StyledListCard>
              <LeftSideCard movie={element} isMovie={isMovie} />
              {isTablet ? (
                <InteractionCard movie={element} isMovie={isMovie} />
              ) : (
                <></>
              )}
            </StyledListCard>
          </StyledListElement>
        );
      })}
    </StyledList>
  );
};

export default List;
