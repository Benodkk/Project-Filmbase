import React, { useState } from "react";

import SearchingResult from "./SearchingResult";

import search from "../../../assets/search.png";

import { StyledHeaderInput } from "../../styles/shared/Header/SearchingBar.style";

function SearchingBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
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
