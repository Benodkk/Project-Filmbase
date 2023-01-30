import styled from "styled-components";
import { devices } from "../../deviceWidth";

export const StyledWelcomeMovieSection = styled.div`
  width: 100%;
  max-height: 50vh;
  padding-top: 65px;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const StyledWelcomeMovieContainer = styled.div`
  width: 100%;
  height: 50vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 1) 0px -20px 80px 10px inset,
    rgba(0, 0, 0, 0.4) 0px -50px 50px 0px inset;
  background-image: url(${({ photo }) => photo});
  color: white;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${devices.tablet} {
    background-position: center;
    padding: 25px 50px;
  }
  @media ${devices.desktop} {
    width: 1124px;
  }
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  gap: 40px;
  @media ${devices.tablet} {
    align-items: flex-start;
    flex-direction: row;
    padding: 40px 20px;
    gap: 20px;
  }
  @media ${devices.desktop} {
    width: 1024px;
    padding: 40px 0px;
  }
`;
export const StyledMovieInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  @media ${devices.desktop} {
    width: 1024px;
  }
`;

// Movie details

export const StyledMovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const StyledMovieDetails = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
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
  padding: 10px;
  padding-top: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  @media ${devices.desktop} {
    width: 1024px;
  }
`;

// actors container

export const StyledActorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  padding-top: 10px;
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
  width: 100px;
  box-sizing: border-box;
  padding: 12px;
  @media ${devices.tablet} {
    width: 140px;
  }
`;
