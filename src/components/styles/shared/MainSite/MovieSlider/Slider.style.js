import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  width: 98%;
  /* padding-left: 2%; */
  overflow: hidden;
  position: relative;
`;
export const StyledSlider = styled.div`
  display: flex;
  /* position: relative; */
  gap: ${({ gap }) => gap};
  padding: 15px 0 30px;
  transition: 1.5s;
  transform: ${({ transform }) => "translate(" + (-transform + "px)")};
`;

export const StyledElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ gap }) => gap};
`;

export const StyledSliderButton = styled.button`
  position: absolute;
  height: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.gold};
  font-size: 120%;
  margin: 0 20px;
  right: ${({ right }) => (right ? "2%" : "")};
  top: 115px;
  z-index: 3;
  visibility: ${({ visibility }) => visibility};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGold};
  }
  transition: transform 1.5s;
  transform: ${({ transform }) => "translate(" + (transform + "px)")};
`;

export const BoxShadowLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 15vw;
  height: ${({ height }) => height};
  z-index: 2;
  opacity: 0.7;
  background-image: linear-gradient(to right, black, rgb(0, 0, 0, 0));
  pointer-events: none;
  transition: transform 1.5s;
  transform: ${({ transform }) => "translate(" + (transform + "px)")};
`;

export const BoxShadowRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 15vw;
  height: ${({ height }) => height};
  z-index: 2;
  opacity: 0.7;
  background-image: linear-gradient(to right, rgb(0, 0, 0, 0), black);
  pointer-events: none;
  transition: transform 1.5s;
  transform: ${({ transform }) => "translate(" + (transform + "px)")};
`;
