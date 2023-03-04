import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_URL, API_KEY } from "../../API/config";

import MovieInfo from "./MovieInfo";
import ActorsSection from "./ActorsSection";
import WelcomeMovieSection from "./WelcomeMovieSection";
import PageContainer from "../../components/PageContainer";

const DetailsPage = () => {
  const { kind, movie } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [display, setDisplay] = useState();
  const [credits, setCredits] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    const requestOne = fetch(
      `${API_URL}/${kind}/${movie}?api_key=${API_KEY}`
    ).then((response) => response.json());
    const requestTwo = fetch(
      `${API_URL}/${kind}/${movie}/credits?api_key=${API_KEY}`
    ).then((response) => response.json());
    Promise.all([requestOne, requestTwo])
      .then((data) => {
        setDisplay(data[0]);
        setCredits(data[1]);
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      abortController.abort();
    };
  }, [movie]);

  return display ? (
    <PageContainer>
      <WelcomeMovieSection display={display} kind={kind} />
      <MovieInfo display={display} credits={credits} kind={kind} />
      <ActorsSection credits={credits} />
    </PageContainer>
  ) : (
    <></>
  );
};
export default DetailsPage;
