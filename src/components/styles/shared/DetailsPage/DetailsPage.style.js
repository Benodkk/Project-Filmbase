import styled from "styled-components";

export const StyledWelcomeMovieSection = styled.div`
  width: 100%;
  max-height: 50vh;
  padding-top: 65px;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const StyledWelcomeMovieContainer = styled.div`
  width: 1124px;
  height: 50vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px 50px;
  box-shadow: rgba(0, 0, 0, 1) 0px -20px 80px 10px inset,
    rgba(0, 0, 0, 0.4) 0px -50px 50px 0px inset;
  background-image: url(${({ photo }) => photo});
  background-position: center;
  background-size: cover;
  color: white;
`;

// Welcome Section

export const StyledType = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGold};
`;
export const StyledTitle = styled.div`
  font-weight: 700;
  color: white;
  font-size: 48px;
`;

// Movie Info section

export const StyledMovieInfoContainer = styled.div`
  display: flex;
  width: 1024px;
  box-sizing: border-box;
  padding: 40px 0px;
  gap: 20px;
`;

// Movie details

export const StyledMovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledMovieDetails = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: auto;
  align-items: flex-end;
  row-gap: 10px;
`;

export const StyledFirstDiv = styled.div`
  color: ${({ theme }) => theme.colors.grey};
`;

// actors Section

export const StyledSectionName = styled.div`
  font-size: 20px;
  align-self: flex-start;
`;

export const StyledActorsSection = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

// actors slider

export const StyledSliderContainer = styled.div`
  width: 1024px;
  padding: 25px;
  overflow-x: hidden;
  position: relative;
`;

export const StyledSlider = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  /* padding: 15px 0 30px; */
  transition: 1s;
  transform: ${({ transform }) => "translate(" + (-transform + "px)")};
`;

export const StyledSliderButton = styled.button`
  position: absolute;
  height: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.gold};
  font-size: 120%;
  right: ${({ right }) => (right ? "-0%" : "")};
  left: ${({ right }) => (right ? "" : "-0%")};
  top: 105px;
  z-index: 1;
  visibility: ${({ visibility }) => visibility};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGold};
  }
`;
export const StyledOneActor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  transition: 0.5s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 6px;
  }
`;
export const StyledActorName = styled.div`
  width: ${({ width }) => `${width}px`};
  box-sizing: border-box;
  padding: 12px;
`;
