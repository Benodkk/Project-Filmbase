import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import List from "./List";
import SwitchPage from "../Ranking/SwitchPage";
import PageContainer from "../../components/PageContainer";

import { API_KEY, API_URL } from "../../API/config";
import moviePhoto from "../../assets/movie.jpg";

import {
  StyledListContainer,
  StyledListHeaderContainer,
  StyledListTitle,
} from "./UserList.style";
import WelcomeBGImage from "../../components/WelcomeBGImage";

const UserList = () => {
  const { kind, page_nr } = useParams();
  const store = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);

  // const [loading, setLoading] = useState("");

  const urlVaraibles = {
    rated_movies: "RATED MOVIES",
    liked_movies: "LIKED MOVIES",
    to_watch_movies: "TO WATCH MOVIES",
    rated_series: "RATED TV SERIES",
    liked_series: "LIKED TV SERIES",
    to_watch_series: "TO WATCH TV SERIES",
  };

  const isMovie = kind.includes("movies");
  const type = kind.includes("movies") ? "movie" : "tv";
  const listType = kind.includes("rated")
    ? "rate"
    : kind.includes("like")
    ? "like"
    : kind.includes("to_watch")
    ? "toWatch"
    : "";

  useEffect(() => {
    const movies = [];

    const fetchedData = [];

    const fetchData = async () => {
      // setLoading(true);
      for (let i = 0; i < store.movies.length; i++) {
        if (
          store.movies[i][listType] !== null &&
          store.movies[i][listType] !== false &&
          store.movies[i].isMovie === isMovie
        )
          movies.push(store.movies[i]);
      }
      for (let i = page_nr * 20 - 20; i < page_nr * 20; i++) {
        try {
          const response = await fetch(
            `${API_URL}/${type}/${movies[i].id}?api_key=${API_KEY}`
          );
          const fetchedMovie = await response.json();
          fetchedData.push(fetchedMovie);
        } catch (err) {
          console.log(err.message);
        }
      }
      setData(fetchedData);
      setPages(Math.ceil(movies.length / 20));
      // setLoading(false);
    };
    fetchData();
  }, [page_nr]);

  return (
    <PageContainer>
      <WelcomeBGImage img={moviePhoto} />
      <StyledListContainer>
        <StyledListHeaderContainer>
          <StyledListTitle>{urlVaraibles[kind]}</StyledListTitle>
        </StyledListHeaderContainer>
        <List list={data} isMovie={isMovie} />
        <SwitchPage
          pages={pages}
          switchPageUrl={`/user/list/${kind}`}
          page_nr={page_nr}
        />
      </StyledListContainer>
    </PageContainer>
  );
};

export default UserList;
