import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ListHeader from "./ListHeader";
import RankingList from "./RankingList";
import ListSort from "./ListSort";
import SwitchPage from "./SwitchPage";
import PageContainer from "../../components/PageContainer";

import { API_URL, API_KEY } from "../../API/config";
import { sortList } from "../../database/dataRanking";
import moviePhoto from "../../assets/movie.jpg";

import { StyledListContainer } from "./Ranking.style";
import WelcomeBGImage from "../../components/WelcomeBGImage";

const Ranking = () => {
  const { kind, sort, genre, page_nr } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [kind]);

  const [displayData, setDisplayData] = useState([]);
  const [pages, setPages] = useState(0);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const apiSort = sortList
      .map((item) => item.values)
      .flat()
      .find((value) => value.linkValue === sort).apiValue;

    const requestOne = fetch(
      `${API_URL}discover/${kind}?api_key=${API_KEY}&sort_by=${apiSort}&page=${page_nr}&with_genres=${genre}&vote_count.gte=500`
    ).then((response) => response.json());

    const requestTwo = fetch(
      `${API_URL}/genre/${kind}/list?api_key=${API_KEY}`
    ).then((response) => response.json());

    Promise.all([requestOne, requestTwo])
      .then((data) => {
        console.log(data);
        setDisplayData(data[0].results);
        setPages(data[0].total_pages);
        setGenres(data[1].genres);
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      abortController.abort();
    };
  }, [kind, sort, genre, page_nr]);

  return (
    <PageContainer>
      <WelcomeBGImage img={moviePhoto} />
      <StyledListContainer>
        <ListHeader kind={kind} sort={sort} genre={genre} genres={genres} />
        <ListSort kind={kind} sort={sort} genre={genre} />
        <RankingList
          displayData={displayData}
          page_nr={page_nr}
          genres={genres}
          kind={kind}
        />
        <SwitchPage
          pages={pages}
          switchPageUrl={`/ranking/${kind}/${sort}/${genre}`}
          page_nr={page_nr}
        />
      </StyledListContainer>
    </PageContainer>
  );
};
export default Ranking;
