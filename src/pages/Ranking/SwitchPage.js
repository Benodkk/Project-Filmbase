import React from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledButton,
  StyledButtonsContainer,
} from "../../components/styles/shared/Ranking/Ranking.style";

const SwitchPage = ({ data, switchPageUrl, page_nr, elementPerPage }) => {
  const navigate = useNavigate();

  let totalPages = data.length / elementPerPage;

  const createButtons = () => {
    let buttons = [];
    for (let i = 0; i < totalPages; i++) {
      if (i + 1 > Number(page_nr) - 3 && i + 1 < Number(page_nr) + 3) {
        buttons.push(
          <StyledButton
            selected={Number(page_nr) === i + 1 ? true : false}
            key={i + 1}
            onClick={() => navigate(`${switchPageUrl}/${i + 1}`)}
          >
            {i + 1}
          </StyledButton>
        );
      }
    }
    return buttons;
  };

  return (
    <StyledButtonsContainer show={totalPages > 1}>
      <StyledButton
        onClick={() =>
          page_nr > 1 ? navigate(`${switchPageUrl}/${Number(page_nr) - 1}`) : ""
        }
      >
        {"<"}
      </StyledButton>
      {createButtons()}
      <StyledButton
        onClick={() =>
          page_nr < totalPages
            ? navigate(`${switchPageUrl}/${Number(page_nr) + 1}`)
            : ""
        }
      >
        {">"}
      </StyledButton>
    </StyledButtonsContainer>
  );
};

export default SwitchPage;
