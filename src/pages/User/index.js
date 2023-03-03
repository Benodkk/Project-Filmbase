import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import WelcomeUserSection from "./WelcomeUserSection";
import OneSection from "./OneSection";
import SectionHeader from "./SectionHeader";
import NoMoviesInfo from "./NoMoviesInfo";
import PageContainer from "../../components/PageContainer";

const User = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const store = useSelector((state) => state);

  const [ratedMovies, setRatedMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [toWatchMovies, setToWatchMovies] = useState([]);

  const [ratedSeries, setRatedSeries] = useState([]);
  const [likedSeries, setLikedSeries] = useState([]);
  const [toWatchSeries, setToWatchSeries] = useState([]);

  useEffect(() => {
    const onlyRatedMovies = [];
    const onlyLikedMovies = [];
    const onlyToWatchMovies = [];

    const onlyRatedSeries = [];
    const onlyLikedSeries = [];
    const onlyToWatchSeries = [];

    const allData = store.movies.sort((a, b) => b.rate - a.rate);

    for (let i = 0; i < allData.length; i++) {
      const movie = allData[i];
      const kind = movie.isMovie ? "movie" : "tv";

      if (kind === "movie") {
        if (movie.rate !== null) onlyRatedMovies.push(movie);
        if (movie.like) onlyLikedMovies.push(movie);
        if (movie.toWatch) onlyToWatchMovies.push(movie);
      }
      if (kind === "tv") {
        if (movie.rate !== null) onlyRatedSeries.push(movie);
        if (movie.like) onlyLikedSeries.push(movie);
        if (movie.toWatch) onlyToWatchSeries.push(movie);
      }
    }
    setRatedMovies(onlyRatedMovies);
    setLikedMovies(onlyLikedMovies);
    setToWatchMovies(onlyToWatchMovies);

    setRatedSeries(onlyRatedSeries);
    setLikedSeries(onlyLikedSeries);
    setToWatchSeries(onlyToWatchSeries);
  }, []);

  return (
    <PageContainer>
      <WelcomeUserSection />
      <SectionHeader
        title="MOVIES"
        rated={ratedMovies}
        toWatch={toWatchMovies}
        favourite={likedMovies}
      />
      {ratedMovies.concat(likedMovies).concat(toWatchMovies).length ? (
        <>
          <OneSection
            title="RATED MOVIES"
            list={ratedMovies}
            btnLink="rated_movies"
          />
          <OneSection
            title="LIKED MOVIES"
            list={likedMovies}
            btnLink="liked_movies"
          />
          <OneSection
            title="TO WATCH MOVIES"
            list={toWatchMovies}
            btnLink="to_watch_movies"
          />
        </>
      ) : (
        <NoMoviesInfo kind="movies" />
      )}
      <SectionHeader
        title="TV SERIES"
        rated={ratedSeries}
        toWatch={toWatchSeries}
        favourite={likedSeries}
      />
      {ratedSeries.concat(likedSeries).concat(toWatchSeries).length ? (
        <>
          <OneSection
            title="RATED TV SERIES"
            list={ratedSeries}
            btnLink="rated_series"
          />
          <OneSection
            title="LIKED TV SERIES"
            list={likedSeries}
            btnLink="liked_series"
          />
          <OneSection
            title="TO WATCH TV SERIES"
            list={toWatchSeries}
            btnLink="to_watch_series"
          />
        </>
      ) : (
        <NoMoviesInfo kind="tvSeries" />
      )}
    </PageContainer>
  );
};

export default User;
