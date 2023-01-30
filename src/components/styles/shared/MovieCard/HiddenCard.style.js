import styled from "styled-components";
import { devices } from "../../deviceWidth";

export const StyledHiddenCard = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  overflow: visible;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.5s;
  transition-delay: ${({ isHovered }) => (isHovered ? "0.5s" : "0s")};
  z-index: 3;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
  @media ${devices.tablet} {
    left: auto;
    transform: translateX(0%);
    transition-delay: 0s;
    width: auto;
    justify-content: flex-start;
  }
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
  @media ${devices.tablet} {
    transform: ${({ isHovered }) =>
      isHovered
        ? "translateX(0px) translateY(0) scale(1)"
        : " translateX(-260px) translateY(-40%) scale(0)"};
  }
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
  z-index: 3;
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
  opacity: ${({ isHovered }) => (isHovered ? 0.6 : 0)};
`;

// show card trigger

export const StyledShowCardTrigger = styled.div`
  position: absolute;
  min-width: 20px;
  min-height: 32px;
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
    width: 20px;
  }

  @media ${devices.desktop} {
    min-width: 24px;
    min-height: 40px;
    img {
      width: 24px;
    }
  }
`;
