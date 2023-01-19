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