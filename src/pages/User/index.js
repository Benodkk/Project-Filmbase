import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import WelcomeUserSection from "./WelcomeUserSection";
import OneSection from "./OneSection";
import SectionHeader from "./SectionHeader";
import NoMoviesInfo from "./NoMoviesInfo";

import db from "../../database/db.json";

import { StyledPageContainer } from "../../components/styles/shared/Container.style";

const User = () => {
  const store = useSelector((state) => state);

  const [displayMovies, setDisplayMovies] = useState({
    rated: [],
    liked: [],
    toWatch: [],
  });

  const [displaySeries, setDisplaySeries] = useState({
    rated: [],
    liked: [],
    toWatch: [],
  });

  useEffect(() => {
    setDisplayMovies({
      rated: ratedMovies,
      liked: likedMovies,
      toWatch: toWatchMovies,
    });
    setDisplaySeries({
      rated: ratedSeries,
      liked: likedSeries,
      toWatch: toWatchSeries,
    });
  }, []);

  const sortList = (list) => {
    const sortedList = list.sort((a, b) => {
      const rateA = store.movies.find((item) => item.id === a.id).rate;
      const rateB = store.movies.find((item) => item.id === b.id).rate;
      return rateB - rateA;
    });
    return sortedList;
  };

  // user movie list

  const userMovies = db.movies.filter((storageMovie) =>
    store.movies.map((userMovie) => userMovie.id).includes(storageMovie.id)
  );

  const ratedMovies = [],
    likedMovies = [],
    toWatchMovies = [];

  userMovies.forEach((movie) => {
    const userMovie = store.movies.find((item) => item.id === movie.id);
    if (userMovie.rate !== null) ratedMovies.push(movie);
    if (userMovie.like) likedMovies.push(movie);
    if (userMovie.toWatch) toWatchMovies.push(movie);
  });

  sortList(ratedMovies);
  sortList(likedMovies);

  // user series list

  const userSeries = db.tvSeries.filter((storageSeries) =>
    store.movies.map((userSeries) => userSeries.id).includes(storageSeries.id)
  );

  const ratedSeries = [],
    likedSeries = [],
    toWatchSeries = [];

  userSeries.forEach((series) => {
    const userSeries = store.movies.find((item) => item.id === series.id);
    if (userSeries.rate !== null) ratedSeries.push(series);
    if (userSeries.like) likedSeries.push(series);
    if (userSeries.toWatch) toWatchSeries.push(series);
  });

  sortList(ratedSeries);
  sortList(likedSeries);

  return (
    <StyledPageContainer>
      <WelcomeUserSection />
      <SectionHeader
        title="MOVIES"
        rated={displayMovies.rated}
        toWatch={displayMovies.toWatch}
        favourite={displayMovies.liked}
      />
      {userMovies.length ? (
        <>
          <OneSection
            title="RATED MOVIES"
            list={displayMovies.rated}
            btnLink="rated_movies"
          />
          <OneSection
            title="LIKED MOVIES"
            list={displayMovies.liked}
            btnLink="liked_movies"
          />
          <OneSection
            title="TO WATCH MOVIES"
            list={displayMovies.toWatch}
            btnLink="to_watch_movies"
          />
        </>
      ) : (
        <NoMoviesInfo kind="movies" />
      )}
      <SectionHeader
        title="TV SERIES"
        rated={displaySeries.rated}
        toWatch={displaySeries.toWatch}
        favourite={displaySeries.liked}
      />
      {userSeries.length ? (
        <>
          <OneSection
            title="RATED TV SERIES"
            list={displaySeries.rated}
            btnLink="rated_series"
          />
          <OneSection
            title="LIKED TV SERIES"
            list={displaySeries.liked}
            btnLink="liked_series"
          />
          <OneSection
            title="TO WATCH TV SERIES"
            list={displaySeries.toWatch}
            btnLink="to_watch_series"
          />
        </>
      ) : (
        <NoMoviesInfo kind="tvSeries" />
      )}
    </StyledPageContainer>
  );
};

export default User;
