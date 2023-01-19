import { useState } from "react";

import { Link } from "react-router-dom";

import menu from "../../assets/menu.png";
import user from "../../assets/user.png";
import userGold from "../../assets/user-gold.png";

import { StyledActionImage } from "../styles/shared/Image.style";
import {
  StyledMenu,
  StyledHeaderElement,
  StyledMenuElement,
  StyledMenuLinkContainer,
} from "../styles/shared/Header/HeaderElement.style";
import { StyledDiv } from "../styles/shared/Div.style";
import { useTheme } from "styled-components";

const MenuHeader = () => {
  const theme = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [timer, setTimer] = useState("");
  const [userHover, setUserHover] = useState(false);

  const runTimer = () => {
    const timeout = setTimeout(() => {
      setShowMenu(false);
    }, 3000);
    setTimer(timeout);
  };

  return (
    <StyledMenuElement>
      <StyledHeaderElement>
        <Link
          to="/user"
          onMouseEnter={() => {
            setUserHover(true);
          }}
          onMouseLeave={() => {
            setUserHover(false);
          }}
        >
          <StyledHeaderElement>
            <StyledActionImage src={userHover ? userGold : user} width="40px" />
            <StyledDiv color={userHover ? theme.colors.gold : "white"}>
              User
            </StyledDiv>
          </StyledHeaderElement>
        </Link>
        <StyledActionImage
          width="40px"
          src={menu}
          padding="0 0 0 15px"
          onClick={() => {
            setShowMenu(true);
            runTimer();
          }}
        />
      </StyledHeaderElement>
      <StyledMenuElement>
        <StyledMenu>
          <StyledMenuLinkContainer
            showMenu={showMenu}
            onMouseEnter={() => clearTimeout(timer)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <Link to="/ranking/movies">Rankings</Link>
            <Link to="/store/movies">Movies</Link>
            <Link to="/store/TvSeries">TvSeries</Link>
          </StyledMenuLinkContainer>
        </StyledMenu>
      </StyledMenuElement>
    </StyledMenuElement>
  );
};

export default MenuHeader;
