import styled from "styled-components";

export const StyledInteractionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ gap }) => (gap ? "" : "space-between")};
  flex-shrink: 0;
  gap: ${({ gap }) => gap};
  box-sizing: border-box;
  width: 300px;
  height: 100%;
`;

// opinion row

export const StyledOpinionsRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledOpinionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

// opinion circle

export const StyledOpinionCircle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 0.5px solid black;
  font-size: 25px;
  background-color: black;
  color: #ffc200;
  z-index: 1;
  transition: 0.5s;
  transform: ${({ scale }) => scale};
`;
export const StyledUserCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 0.5px solid black;
  font-size: 30px;
`;

// watch it btn

export const StyledWatchItBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 0.5px solid rgb(0, 0, 0, 0.2);
  transition: 0.5s;
  padding: 2px;
  font-size: 16px;
  cursor: pointer;
  img {
    width: 10%;
  }
  &:hover {
    border: 0.5px solid rgb(0, 0, 0);
  }
`;
