import React from "react";
import { Link } from "react-router-dom";

import SearchingBar from "./SearchingBar/SearchingBar";
import MenuHeader from "./MenuHeader";

import logo from "../../assets/logo.png";

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderElement,
  StyledWebsiteName,
} from "../styles/shared/Header/Header.style";
import { StyledImage } from "../styles/shared/Image.style";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <StyledHeaderElement>
          <Link to="/ranking/movies/rate_down/no_filter/1">
            <StyledHeaderElement>
              <StyledImage src={logo} width="40px" />
              <StyledWebsiteName>FILMBASE</StyledWebsiteName>
            </StyledHeaderElement>
          </Link>
        </StyledHeaderElement>
        <SearchingBar />
        <MenuHeader />
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;
