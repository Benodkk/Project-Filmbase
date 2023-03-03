import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledWelcomeMovieSection = styled.div`
  width: 100%;
  max-height: 55vh;
  padding-top: 65px;
  background-color: black;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const StyledWelcomeMovieContainer = styled.div`
  width: 100%;
  height: 55vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 1) 0px -20px 80px 10px inset,
    rgba(0, 0, 0, 0.4) 0px -50px 50px 0px inset;
  background-image: url(${({ photo }) => photo});
  color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    content: "";
    height: 300px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0%;
  }
  @media ${devices.tablet} {
    background-position: center;
    padding: 25px 50px;
  }
  @media ${devices.desktop} {
    width: 1124px;
  }
`;

// Welcome Section
export const StyledWelcomeDetails = styled.div`
  z-index: 1;
`;
export const StyledType = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGold};
`;
export const StyledTitle = styled.div`
  font-weight: 700;
  color: white;
  font-size: 48px;
  width: 80%;
`;

// Movie Info section

export const StyledMovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  gap: 40px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  @media ${devices.tablet} {
    padding: 40px 20px;
    gap: 60px;
    align-items: flex-start;
    flex-direction: row;
  }
  @media ${devices.desktop} {
    width: 1024px;
    padding: 40px 0px;
  }
`;
export const StyledMovieInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  width: 100%;
  gap: 20px;
  @media ${devices.desktop} {
    gap: 40px;
    width: 1024px;
  }
`;

export const StyledMoviePoster = styled.img`
  width: 140px;
  height: 198px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;

  @media ${devices.desktop} {
    grid-row: 1/3;
    width: 200px;
    height: 285px;
  }
`;

// Movie details

export const StyledMovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  grid-column: 1/3;
  @media ${devices.tablet} {
    grid-column: 2/3;
  }
`;

export const StyledMovieDetails = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: auto;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;
  padding-top: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  @media ${devices.desktop} {
    width: 1024px;
    padding: 10px;
  }
`;

export const StyledActorImage = styled.img`
  width: 140px;
`;

// actors container

export const StyledActorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ full }) => (full ? "space-between" : "flex-start")};
  gap: 15px;
  flex-wrap: wrap;
  padding-top: 10px;
  @media ${devices.desktop} {
    gap: 30px;
  }
`;

export const StyledOneActor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
`;
export const StyledActorName = styled.div`
  width: 100px;
  box-sizing: border-box;
  padding-top: 12px;
  @media ${devices.tablet} {
    width: 140px;
  }
`;
export const StyledCharacterName = styled.div`
  width: 100px;
  box-sizing: border-box;
  padding: 12px;
  color: ${({ theme }) => theme.colors.grey};
  @media ${devices.tablet} {
    width: 140px;
  }
`;
