import { Link } from "react-router-dom";

import starGold from "../../assets/star-gold.png";

import { useTheme } from "styled-components";
import { StyledImage } from "../../components/styles/shared/Image.style";
import { StyledHorizontalRow } from "../../components/styles/shared/HorizotalSpace.style";
import { StyledDiv } from "../../components/styles/shared/Div.style";
import { StyledVerticalContainer } from "../../components/styles/shared/Container.style";
import { StyledLeftSide } from "../../components/styles/shared/UserList/UserList.style";

const LeftSideCard = ({ movie }) => {
  const theme = useTheme();
  return (
    <StyledLeftSide>
      <StyledHorizontalRow gap="5px">
        <StyledDiv fontSize="20px">
          <Link to={movie.id}>{movie.title}</Link>
        </StyledDiv>
        <StyledDiv fontSize="20px">{movie.realsed.slice(0, 4)}</StyledDiv>
      </StyledHorizontalRow>
      <StyledHorizontalRow gap="10px" alignItems="flex-end">
        <StyledHorizontalRow gap="5px" alignItems="flex-end">
          <StyledImage width="40px" src={starGold} />
          <StyledDiv fontSize="28px">
            {movie.rating.toFixed(2).toString().replace(".", ",")}
          </StyledDiv>
        </StyledHorizontalRow>
        <StyledVerticalContainer>
          <StyledDiv color={theme.colors.grey} fontSize="14px">
            {movie.numberOfRatings.toLocaleString("pl-PL")}
          </StyledDiv>
          <StyledDiv color={theme.colors.grey} fontSize="14px">
            ratings
          </StyledDiv>
        </StyledVerticalContainer>
      </StyledHorizontalRow>
    </StyledLeftSide>
  );
};

export default LeftSideCard;
