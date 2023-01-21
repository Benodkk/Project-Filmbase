import { useNavigate } from "react-router-dom";

import {
  StyledButton,
  StyledButtonsContainer,
} from "../../components/styles/shared/Ranking/Ranking.style";

const SwitchPage = ({ data, kind, sort, genre, page_nr }) => {
  const navigate = useNavigate();

  const createButtons = () => {
    let totalPages = data.length / 50;
    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i > Number(page_nr) - 3 && i < Number(page_nr) + 3) {
        buttons.push(
          <StyledButton
            selected={Number(page_nr) === i ? true : false}
            key={i}
            onClick={() => navigate(`/ranking/${kind}/${sort}/${genre}/${i}`)}
          >
            {i}
          </StyledButton>
        );
      }
    }
    return buttons;
  };

  return (
    <StyledButtonsContainer>
      <StyledButton
        onClick={() =>
          navigate(`/ranking/${kind}/${sort}/${genre}/${page_nr - 1}`)
        }
      >
        {"<"}
      </StyledButton>
      {createButtons()}
      <StyledButton
        onClick={() =>
          navigate(`/ranking/${kind}/${sort}/${genre}/${Number(page_nr) + 1}`)
        }
      >
        {">"}
      </StyledButton>
    </StyledButtonsContainer>
  );
};

export default SwitchPage;
