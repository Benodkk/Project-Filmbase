import React, { useState, useRef, useEffect } from "react";

import db from "../../../database/db.json";

import TrendingContainer from "./TrendingContainer";
import Results from "./Results";

import cross from "../../../assets/cross-grey.png";

import {
  StyledSearchingResultContainer,
  StyledInput,
  StyledSearchingResult,
  StyledInputInfo,
} from "../../styles/shared/Header/SearchingBar.style";
import { StyledActionImage } from "../../styles/shared/Image.style";
import { useLocation } from "react-router-dom";

let allData = db.movies
  .concat(db.tvSeries)
  .concat(db.actors)
  .concat(db.writers)
  .concat(db.directors);

const SearchingResult = ({ isFocused, setIsFocused }) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    inputRef.current.focus();
  }, [isFocused]);

  useEffect(() => {
    setQuery("");
  }, [location]);

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
    <StyledSearchingResultContainer isFocused={isFocused}>
      <StyledSearchingResult>
        <StyledInputInfo>
          <div>Search for the movies, tv series, people:</div>
          <StyledActionImage src={cross} onClick={() => setIsFocused(false)} />
        </StyledInputInfo>
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
          <Results results={results} setIsFocused={setIsFocused} />
        )}
      </StyledSearchingResult>
    </StyledSearchingResultContainer>
  );
};

export default SearchingResult;
