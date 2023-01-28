import StarRating from "../../components/StarRating";
import TitleWithYear from "../../components/TitleWithYear";

import { StyledLeftSide } from "../../components/styles/shared/UserList/UserList.style";

const LeftSideCard = ({ movie }) => {
  return (
    <StyledLeftSide>
      <TitleWithYear movie={movie} />
      <StarRating movie={movie} />
    </StyledLeftSide>
  );
};

export default LeftSideCard;
