import { Link } from "react-router-dom";

import SearchingBar from "./SearchingBar/SearchingBar";
import MenuHeader from "./MenuHeader";

import logo from "../../assets/logo.png";

import {
  StyledHeader,
  StyledHeaderContainer,
} from "../styles/shared/Header/Header.style";
import { StyledImage } from "../styles/shared/Image.style";
import { StyledHeaderElement } from "../styles/shared/Header/HeaderElement.style";
import { StyledDiv } from "../styles/shared/Div.style";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <StyledHeaderElement>
          <Link to="/">
            <StyledHeaderElement>
              <StyledImage src={logo} width="40px" />
              <StyledDiv color="white">FILMBASE</StyledDiv>
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
