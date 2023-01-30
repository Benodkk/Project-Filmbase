import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ListHeader from "./ListHeader";
import RankingList from "./RankingList";
import ListSort from "./ListSort";
import SwitchPage from "./SwitchPage";

import { renderData } from "../../database/dataRanking";
import moviePhoto from "../../assets/movie.jpg";

import { StyledListContainer } from "../../components/styles/shared/Ranking/Ranking.style";
import { StyledPageContainer } from "../../components/styles/shared/Container.style";
import { StyledWelcomePhoto } from "../../components/styles/shared/WelcomePhoto.style";

const Ranking = () => {
  const { kind, sort, genre, page_nr } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [kind]);

  const [displayData, setDisplayData] = useState([]);

  let data = renderData.find((element) => element.id === kind).data;

  // sort data
  if (sort === "rate_down") {
    data.sort((a, b) => (a.rating < b.rating ? 1 : -1));
  } else if (sort === "rate_up") {
    data.sort((a, b) => (a.rating > b.rating ? 1 : -1));
  } else if (sort === "date_down") {
    data.sort((a, b) => (a.realsed < b.realsed ? 1 : -1));
  } else if (sort === "date_up") {
    data.sort((a, b) => (a.realsed > b.realsed ? 1 : -1));
  } else if (sort === "popularity_down") {
    data.sort((a, b) => (a.numberOfRatings < b.numberOfRatings ? 1 : -1));
  } else if (sort === "popularity_up") {
    data.sort((a, b) => (a.numberOfRatings > b.numberOfRatings ? 1 : -1));
  }

  // filter data
  if (genre !== "no_filter") {
    data = data.filter((element) => element.genre === genre);
  }

  useEffect(() => {
    setDisplayData(data.slice(50 * page_nr - 50, 50 * page_nr));
  }, [kind, sort, genre, page_nr]);

  return (
    <StyledPageContainer>
      <StyledWelcomePhoto photo={moviePhoto} />
      <StyledListContainer>
        <ListHeader kind={kind} sort={sort} genre={genre} />
        <ListSort kind={kind} sort={sort} genre={genre} />
        <RankingList displayData={displayData} page_nr={page_nr} />
        <SwitchPage
          data={data}
          switchPageUrl={`/ranking/${kind}/${sort}/${genre}`}
          page_nr={page_nr}
          elementPerPage={50}
        />
      </StyledListContainer>
    </StyledPageContainer>
  );
};
export default Ranking;
