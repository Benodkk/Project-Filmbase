import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SearchingResult from "./SearchingResult";

import search from "../../../assets/search.png";

import {
  StyledHeaderInput,
  StyledSearchImg,
} from "../../styles/shared/Header/SearchingBar.style";

function SearchingBar() {
  const location = useLocation();
  const [bodyOverflow, setBodyOverflow] = useState("hidden");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsFocused(false);
  }, [location]);

  useEffect(() => {
    setBodyOverflow(bodyOverflow === "auto" ? "hidden" : "auto");
  }, [isFocused]);

  useEffect(() => {
    document.body.style.overflow = bodyOverflow;
  }, [bodyOverflow]);

  return (
    <div>
      <StyledSearchImg src={search} onClick={() => setIsFocused(true)} />
      <StyledHeaderInput>
        <img src={search} />
        <input
          type="text"
          onFocus={() => setIsFocused(true)}
          placeholder="Search for the movies, tv series, people:"
        />
      </StyledHeaderInput>
      <SearchingResult isFocused={isFocused} setIsFocused={setIsFocused} />
    </div>
  );
}

export default SearchingBar;
