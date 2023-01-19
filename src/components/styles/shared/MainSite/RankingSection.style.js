import styled from "styled-components";

export const StyledRankingRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyledBGCDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  text-align: center;
  transition: 0.6s;
  background-color: ${({ isHovered }) => (isHovered ? "white" : "black")};
  color: ${({ isHovered }) => (isHovered ? "black" : "white")};
  font-weight: 700;
  padding: 20px 0;
`;
