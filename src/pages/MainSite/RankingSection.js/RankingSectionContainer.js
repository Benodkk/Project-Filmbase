import { useEffect, useState } from "react";

import db from "../../../database/db.json";
import { StyledRankingRow } from "../../../components/styles/shared/MainSite/RankingSection.style";
import RankingSectionElement from "./RankingSectionElement";

let allData = db;

const RankingSectionContainer = ({ sliderType }) => {
  const [data, setData] = useState(
    allData.films.sort((a, b) => (a.rating < b.rating ? 1 : -1)).slice(0, 6)
  );

  useEffect(() => {
    if (sliderType === "movies")
      setData(
        allData.films.sort((a, b) => (a.rating < b.rating ? 1 : -1)).slice(0, 6)
      );
    if (sliderType === "series")
      setData(
        allData.tvSeries
          .sort((a, b) => (a.rating < b.rating ? 1 : -1))
          .slice(0, 6)
      );

    if (sliderType === "popular")
      setData(
        allData.films
          .sort((a, b) => (a.realsed < b.realsed ? 1 : -1))
          .slice(0, 6)
      );
  }, [sliderType]);

  return (
    <StyledRankingRow>
      {data.map((element) => {
        return (
          <RankingSectionElement element={element} sliderType={sliderType} />
        );
      })}
    </StyledRankingRow>
  );
};

export default RankingSectionContainer;
