import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import menu from "../../assets/menu.png";

import {
  StyledMenu,
  StyledHeaderElement,
  StyledMenuElement,
  StyledMenuLinkContainer,
  StyledMenuImg,
} from "./Header.style";

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
        <StyledMenuImg
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
            <Link to="/ranking/movie/rate_down/no_filter/1">Movies</Link>
            <Link to="/ranking/tv/rate_down/no_filter/1">TvSeries</Link>
          </StyledMenuLinkContainer>
        </StyledMenu>
      </StyledMenuElement>
    </StyledMenuElement>
  );
};

export default MenuHeader;
