import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { API_KEY, API_URL } from "../../API/config";

import Trending from "./Trending";

import {
  StyledTrendingContainer,
  StyledTrendingTitleContainer,
  StyledTrendingType,
  StyledTrendingTitle,
  StyledCheckMore,
} from "./SearchingBar.style";

const TrendingContainer = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const requestOne = fetch(
      `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&vote_count.gte=500`
    ).then((response) => response.json());

    const requestTwo = fetch(
      `${API_URL}discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&vote_count.gte=500`
    ).then((response) => response.json());

    Promise.all([requestOne, requestTwo])
      .then((data) => {
        setTrendingMovies(data[0].results.slice(0, 3));
        setTrendingSeries(data[1].results.slice(0, 3));
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <StyledTrendingContainer>
      <StyledTrendingType>
        <StyledTrendingTitleContainer>
          <StyledTrendingTitle>TRENDING MOVIES</StyledTrendingTitle>
          <Link to="/ranking/movie/popularity_down/no_filter/1">
            <StyledCheckMore>Check out more!</StyledCheckMore>
          </Link>
        </StyledTrendingTitleContainer>
        <Trending results={trendingMovies} kind={"movie"}></Trending>
      </StyledTrendingType>
      <StyledTrendingType>
        <StyledTrendingTitleContainer>
          <StyledTrendingTitle>TRENDING TvSERIES</StyledTrendingTitle>
          <Link to="/ranking/tv/popularity_down/no_filter/1">
            <StyledCheckMore>Check out more!</StyledCheckMore>
          </Link>
        </StyledTrendingTitleContainer>
        <Trending results={trendingSeries} kind={"tv"}></Trending>
      </StyledTrendingType>
    </StyledTrendingContainer>
  );
};

export default TrendingContainer;
