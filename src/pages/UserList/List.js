import MovieCard from "../../components/MovieCard";
import LeftSideCard from "./LeftSideCard";
import InteractionCard from "../../components/InteractionCard";

import {
  StyledList,
  StyledListCard,
  StyledListElement,
} from "../../components/styles/shared/UserList/UserList.style";

const List = ({ list }) => {
  return (
    <StyledList>
      {list.map((element) => {
        return (
          <StyledListElement key={element.id}>
            <MovieCard movie={element} cardWidth={140} />
            <StyledListCard>
              <LeftSideCard movie={element} />
              <InteractionCard movie={element} />
            </StyledListCard>
          </StyledListElement>
        );
      })}
    </StyledList>
  );
};

export default List;
