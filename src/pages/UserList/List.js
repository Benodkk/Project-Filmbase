import React from "react";

import MovieCard from "../../components/MovieCard";
import LeftSideCard from "./LeftSideCard";
import InteractionCard from "../../components/InteractionCard";

import { reactDevice } from "../../components/styles/deviceWidth";
import { useMediaQuery } from "react-responsive";
import {
  StyledList,
  StyledListCard,
  StyledListElement,
} from "../../components/styles/shared/UserList/UserList.style";

const List = ({ list }) => {
  const isTablet = useMediaQuery(reactDevice.tablet);
  return (
    <StyledList>
      {list.map((element) => {
        return (
          <StyledListElement key={element.id}>
            <MovieCard movie={element} />
            <StyledListCard>
              <LeftSideCard movie={element} />
              {isTablet ? <InteractionCard movie={element} /> : <></>}
            </StyledListCard>
          </StyledListElement>
        );
      })}
    </StyledList>
  );
};

export default List;
