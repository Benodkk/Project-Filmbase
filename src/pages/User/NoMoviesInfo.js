import React from "react";
import { Link } from "react-router-dom";

import { useTheme } from "styled-components";
import { StyledNoMoviesInfo } from "../../components/styles/shared/User/User.style";
import { StyledHoverDiv } from "../../components/styles/shared/Div.style";

const NoMoviesInfo = ({ kind }) => {
  const theme = useTheme();
  return (
    <StyledNoMoviesInfo>
      <Link to={`/ranking/${kind}/rate_down/no_filter/1`}>
        <StyledHoverDiv fontSize="32px" hoverColor={theme.colors.gold}>
          Add {kind === "movies" ? "movies" : "tv series"} to the list!
        </StyledHoverDiv>
      </Link>
    </StyledNoMoviesInfo>
  );
};

export default NoMoviesInfo;
