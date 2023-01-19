import styled from "styled-components";

export const StyledHiddenCard = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  height: 0px;
  overflow: visible;
  transition: 0.5s;
  z-index: 5;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
`;

export const StyledHiddenCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  gap: 20px;
  font-size: 20px;
  transition: 0.5s;
  background-color: white;
  transform: ${({ isHovered, left }) =>
    isHovered
      ? left
        ? "translateX(-520px) translateY(0) scale(1)"
        : "translateX(0px) translateY(0) scale(1)"
      : " translateX(-260px) translateY(-40%) scale(0)"};
`;

export const StyledBlackScreen = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: visible;
  background-color: black;
  transition: 0.5s;
  z-index: 4;
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
  opacity: ${({ isHovered }) => (isHovered ? 0.6 : 0)};
`;

// show card trigger

export const StyledShowCardTrigger = styled.div`
  position: absolute;
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffc200;
  background-color: ${({ bgc }) => bgc};
  padding: 0 4px;
  z-index: 1;
  cursor: pointer;
  img {
    width: ${({ width }) => width};
  }
`;

// opinion row

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
