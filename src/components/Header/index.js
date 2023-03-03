import React from "react";
import { Link } from "react-router-dom";

import SearchingBar from "../SearchingBar";
import MenuHeader from "./MenuHeader";

import logo from "../../assets/logo.png";

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderElement,
  StyledLogo,
  StyledWebsiteName,
} from "./Header.style";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <StyledHeaderElement>
          <Link to="/ranking/movie/rate_down/no_filter/1">
            <StyledHeaderElement>
              <StyledLogo src={logo} />
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
