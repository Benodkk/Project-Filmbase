import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import menu from "../../assets/menu.png";

import { StyledActionImage } from "../styles/shared/Image.style";
import {
  StyledMenu,
  StyledHeaderElement,
  StyledMenuElement,
  StyledMenuLinkContainer,
} from "../styles/shared/Header/Header.style";

const MenuHeader = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [timer, setTimer] = useState("");

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const runTimer = () => {
    const timeout = setTimeout(() => {
      setShowMenu(false);
    }, 3000);
    setTimer(timeout);
  };

  return (
    <StyledMenuElement>
      <StyledHeaderElement>
        <StyledActionImage
          width="40px"
          src={menu}
          onClick={() => {
            setShowMenu(true);
            runTimer();
          }}
        />
      </StyledHeaderElement>
      <StyledMenuElement>
        <StyledMenu showMenu={showMenu}>
          <StyledMenuLinkContainer
            showMenu={showMenu}
            onMouseEnter={() => clearTimeout(timer)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <Link to="/user">Profile</Link>
            <Link to="/ranking/movies/rate_down/no_filter/1">Movies</Link>
            <Link to="/ranking/tvSeries/rate_down/no_filter/1">TvSeries</Link>
          </StyledMenuLinkContainer>
        </StyledMenu>
      </StyledMenuElement>
    </StyledMenuElement>
  );
};

export default MenuHeader;
