import styled from "styled-components";

export const StyledFilterDiv = styled.div`
  color: ${({ selected, theme }) => (selected ? "black" : theme.colors.grey)};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.gold : ""};
  text-align: center;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

export const StyledRankingCardContainer = styled.div`
  display: flex;
  width: 100%;
  border: rgba(0, 0, 0, 0.2) 1px solid;
`;

export const StyledIndexNr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: ${({ width }) => width + "px"};
`;

export const StyledRankingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
`;

export const StyledLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
`;

export const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  gap: 5px;
`;
