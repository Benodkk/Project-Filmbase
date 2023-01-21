import React, { useState, useRef, useEffect } from "react";

import db from "../../../database/db.json";

import TrendingContainer from "./TrendingContainer";
import Results from "./Results";

import cross from "../../../assets/cross-grey.png";

import { StyledHorizontalSpace } from "../../styles/shared/HorizotalSpace.style";
import {
  StyledSearchingResult,
  StyledInput,
} from "../../styles/shared/Header/SearchingBar.style";
import { StyledActionImage } from "../../styles/shared/Image.style";
import { StyledVerticalContainer } from "../../styles/shared/Container.style";
import { StyledDiv } from "../../styles/shared/Div.style";

let allData = db.movies
  .concat(db.tvSeries)
  .concat(db.actors)
  .concat(db.writers)
  .concat(db.directors);

const SearchingResult = ({ isFocused, setIsFocused }) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [isFocused]);

  const search = () => {
    const newResults = [];
    for (let i = 0; i < allData.length; i++) {
      if (
        (allData[i].title &&
          allData[i].title.toLowerCase().startsWith(query.toLowerCase())) ||
        (allData[i].name &&
          allData[i].name.toLowerCase().startsWith(query.toLowerCase()))
      ) {
        newResults.push({ item: allData[i], match: query.length });
      }
    }
    newResults.sort((a, b) => b.match - a.match);

    // Delete elemets, from previous result if they are in new matching result
    const updatedResults = results.filter(
      (oldResult) =>
        !newResults.some((newResult) => newResult.item.id === oldResult.item.id)
    );

    setResults([...newResults, ...updatedResults].slice(0, 6));
  };

  return (
    <StyledSearchingResult isFocused={isFocused}>
      <StyledVerticalContainer shrink={true}>
        <StyledHorizontalSpace>
          <StyledDiv fontSize="24px">
            Search for the movies, tv series, people:
          </StyledDiv>
          <StyledActionImage
            src={cross}
            width="30px"
            onClick={() => setIsFocused(false)}
          />
        </StyledHorizontalSpace>
        <StyledInput
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={search}
          placeholder="Search:"
        />

        {query.length === 0 ? (
          <TrendingContainer />
        ) : (
          <Results results={results} />
        )}
      </StyledVerticalContainer>
    </StyledSearchingResult>
  );
};

export default SearchingResult;
