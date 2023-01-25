import MovieCard from "../../components/MovieCard";
import RightSideCard from "./RightSideCard";
import LeftSideCard from "./LeftSideCard";

import { StyledVerticalContainer } from "../../components/styles/shared/Container.style";
import {
  StyledListCard,
  StyledListElement,
} from "../../components/styles/shared/UserList/UserList.style";

const List = ({ list }) => {
  return (
    <StyledVerticalContainer gap="20px" padding="20px" paddingSide="20px">
      {list.map((element) => {
        return (
          <StyledListElement>
            <MovieCard movie={element} cardWidth={140} />
            <StyledListCard>
              <LeftSideCard movie={element} />
              <RightSideCard movie={element} />
            </StyledListCard>
          </StyledListElement>
        );
      })}
    </StyledVerticalContainer>
  );
};

export default List;
