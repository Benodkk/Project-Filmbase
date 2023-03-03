import React, { useState, useRef, useEffect } from "react";

import TrendingContainer from "./TrendingContainer";
import Results from "./Results";

import { API_KEY, API_URL } from "../../API/config";
import cross from "../../assets/cross-grey.png";

import {
  StyledSearchingResultContainer,
  StyledInput,
  StyledSearchingResult,
  StyledInputInfo,
  StyledClose,
} from "./SearchingBar.style";
import { useLocation } from "react-router-dom";

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

  useEffect(() => {
    const abortController = new AbortController();

    const requestOne = fetch(
      `${API_URL}search/movie?api_key=${API_KEY}&query=${query}`
    ).then((response) => response.json());

    const requestTwo = fetch(
      `${API_URL}search/tv?api_key=${API_KEY}&query=${query}`
    ).then((response) => response.json());

    Promise.all([requestOne, requestTwo])
      .then((data) => {
        const newResults = data[0].results
          .concat(data[1].results)
          .sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
          .slice(0, 6);
        if (newResults.length > 5) {
          setResults(newResults);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      abortController.abort();
    };
  }, [query]);

  return (
    <StyledSearchingResultContainer isFocused={isFocused}>
      <StyledSearchingResult>
        <StyledInputInfo>
          <div>Search for the movies and tv series:</div>
          <StyledClose src={cross} onClick={() => setIsFocused(false)} />
        </StyledInputInfo>
        <StyledInput
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
