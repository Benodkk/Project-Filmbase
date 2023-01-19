import { StyledHorizontalSpace } from "../../../components/styles/shared/HorizotalSpace.style";
import MovieCard from "../../../components/MovieCard";
import { StyledDiv } from "../../../components/styles/shared/Div.style";
import db from "../../../database/db.json";
import { useEffect, useState } from "react";
import { StyledVerticalContainer } from "../../../components/styles/shared/Container.style";
import {
  StyledBGCDiv,
  StyledElement,
} from "../../../components/styles/shared/MainSite/RankingSection.style";
import { StyledImage } from "../../../components/styles/shared/Image.style";
import eyeGold from "../../../assets/eye-gold.png";
import starGold from "../../../assets/star-gold.png";
import { Link } from "react-router-dom";
const RankingSectionElement = ({ element, sliderType }) => {
  let srcImage = sliderType === "popular" ? eyeGold : starGold;
  let displayedInfo =
    sliderType === "popular" ? element.numberOfRatings : element.rating;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledVerticalContainer
      gap="15px"
      key={element.id}
      style={{ width: "160px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledElement>
        <MovieCard movie={element} cardWidth={160} />
        <StyledBGCDiv isHovered={isHovered}>
          <StyledImage width="30px" src={srcImage} />
          {displayedInfo}
        </StyledBGCDiv>
      </StyledElement>
      <StyledDiv>
        <Link to={element.id}>{element.title}</Link>
      </StyledDiv>
    </StyledVerticalContainer>
  );
};

export default RankingSectionElement;
