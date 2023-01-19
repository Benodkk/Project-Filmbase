import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ListHeader from "../../components/ListHeader";
import RankingList from "./RankingList";

import moviePhoto from "../../assets/movie.jpg";

import {
  StyledPageContainer,
  StyledVerticalContainer,
} from "../../components/styles/shared/Container.style";
import { StyledWelcomePhoto } from "../../components/styles/shared/WelcomePhoto.style";

import db from "../../database/db.json";

const Ranking = () => {
  let { kind } = useParams();

  let data =
    kind === "movies"
      ? db.films.sort((a, b) => (a.rating < b.rating ? 1 : -1))
      : db.tvSeries.sort((a, b) => (a.rating < b.rating ? 1 : -1));

  const [filtrGenre, setFiltrGenre] = useState("");
  const [displayData, setDisplayData] = useState(data.slice(0, 50));

  useEffect(() => {
    filtrGenre
      ? setDisplayData(
          data.filter((element) => element.genre === filtrGenre).slice(0, 50)
        )
      : setDisplayData(data.slice(0, 50));
  }, [filtrGenre]);

  return (
    <StyledPageContainer>
      <StyledWelcomePhoto photo={moviePhoto} />
      <StyledVerticalContainer
        shrink={true}
        zIndex={1}
        style={{ marginTop: "20vh", backgroundColor: "white" }}
      >
        <ListHeader
          filtrGenre={filtrGenre}
          setFiltrGenre={setFiltrGenre}
          title={`${kind === "movies" ? "MOVIE" : "TV SERIES"} RANKING`}
        />
        <RankingList displayData={displayData} />
      </StyledVerticalContainer>
    </StyledPageContainer>
  );
};
export default Ranking;
