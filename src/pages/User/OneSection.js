import { useNavigate } from "react-router-dom";

import MovieCardTitle from "./MovieCardTitle";

import {
  StyledOneSectionContainer,
  StyledShowMoreBtn,
  StyledOneSectionList,
  StyledSectionTitle,
} from "../../components/styles/shared/User/User.style";

const OneSection = ({ title, list, btnLink }) => {
  const navigate = useNavigate();

  return (
    <StyledOneSectionContainer show={list.length > 0}>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <StyledOneSectionList>
        {list.slice(0, 6).map((element) => {
          return <MovieCardTitle movie={element} />;
        })}
      </StyledOneSectionList>
      <StyledShowMoreBtn
        show={list.length > 6}
        onClick={() => navigate(`/user/list/${btnLink}/1`)}
      >
        Show more
      </StyledShowMoreBtn>
    </StyledOneSectionContainer>
  );
};

export default OneSection;
