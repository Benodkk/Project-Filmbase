import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MovieCardTitle from "./MovieCardTitle";

import { API_KEY, API_URL } from "../../API/config";

import {
  StyledOneSectionContainer,
  StyledShowMoreBtn,
  StyledOneSectionList,
  StyledSectionTitle,
} from "./User.style";

const OneSection = ({ title, list, btnLink }) => {
  const navigate = useNavigate();

  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const displayList = list.slice(0, 6);
    const fetchedData = [];

    const fetchData = async () => {
      for (let i = 0; i < displayList.length; i++) {
        const movie = displayList[i];
        const kind = movie.isMovie ? "movie" : "tv";

        try {
          const response = await fetch(
            `${API_URL}/${kind}/${movie.id}?api_key=${API_KEY}`
          );
          const data = await response.json();
          fetchedData.push(data);
        } catch (err) {
          console.log(err.message);
        }
      }
      setDisplayData(fetchedData);
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <StyledOneSectionContainer show={displayData.length > 0}>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <StyledOneSectionList>
        {displayData.map((element) => {
          return (
            <MovieCardTitle
              key={element.id}
              movie={element}
              isMovie={list[0].isMovie}
            />
          );
        })}
      </StyledOneSectionList>
      <StyledShowMoreBtn
        show={list.length > 6}
        onClick={() => navigate(`/user/list/${btnLink}/1`)}
      >
        Show more
      </StyledShowMoreBtn>
    </StyledOneSectionContainer>
  );
};

export default OneSection;
