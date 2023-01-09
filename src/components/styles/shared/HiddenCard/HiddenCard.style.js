import styled from "styled-components";

export const StyledHiddenCard = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  height: 0px;
  overflow: visible;
  transition: 0.5s;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
`;

export const StyledHiddenCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  width: 300px;
  gap: 20px;
  font-size: 20px;
  transition: 0.5s;
  background-color: white;
  transform: ${({ isHovered }) =>
    isHovered
      ? "translateX(0) translateY(0) scale(1)"
      : " translateX(-80%) translateY(-40%) scale(0)"};
  img {
    width: 10%;
    cursor: pointer;
  }
`;
