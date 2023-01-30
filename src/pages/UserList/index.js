import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import List from "./List";
import SwitchPage from "../Ranking/SwitchPage";

import db from "../../database/db.json";
import moviePhoto from "../../assets/movie.jpg";

import {
  StyledListHeaderContainer,
  StyledPageContainer,
} from "../../components/styles/shared/Container.style";
import { StyledWelcomePhoto } from "../../components/styles/shared/WelcomePhoto.style";
import { StyledListContainer } from "../../components/styles/shared/UserList/UserList.style";
import { StyledSelectionTitle } from "../../components/styles/shared/SelectionTitle.style";

const UserList = () => {
  const { kind, page_nr } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const store = useSelector((state) => state);

  const [data, setData] = useState([]);

  const urlVaraibles = {
    rated_movies: "RATED MOVIES",
    liked_movies: "LIKED MOVIES",
    to_watch_movies: "TO WATCH MOVIES",
    rated_series: "RATED TV SERIES",
    liked_series: "LIKED TV SERIES",
    to_watch_series: "TO WATCH TV SERIES",
  };

  let list;
  if (kind.includes("movies")) {
    list = db.movies;
  } else if (kind.includes("series")) {
    list = db.tvSeries;
  }

  useEffect(() => {
    const specificList = list
      .filter((storageMovie) =>
        store.movies.map((userMovie) => userMovie.id).includes(storageMovie.id)
      )
      .filter((movie) => {
        const userMovie = store.movies.find((item) => item.id === movie.id);
        if (kind.includes("rated")) {
          return userMovie.rate !== null;
        } else if (kind.includes("liked")) {
          return userMovie.like;
        } else if (kind.includes("to_watch")) {
          return userMovie.toWatch;
        }
      })
      .sort((a, b) => {
        const rateA = store.movies.find((item) => item.id === a.id).rate;
        const rateB = store.movies.find((item) => item.id === b.id).rate;
        return rateB - rateA;
      });
    setData(specificList);
  }, [page_nr]);

  return (
    <StyledPageContainer>
      <StyledWelcomePhoto photo={moviePhoto} />
      <StyledListContainer>
        <StyledListHeaderContainer>
          <StyledSelectionTitle>{urlVaraibles[kind]}</StyledSelectionTitle>
        </StyledListHeaderContainer>
        <List list={data.slice(20 * page_nr - 20, 20 * page_nr)} />
        <SwitchPage
          data={data}
          switchPageUrl={`/user/list/${kind}`}
          page_nr={page_nr}
          elementPerPage={20}
        />
      </StyledListContainer>
    </StyledPageContainer>
  );
};

export default UserList;
