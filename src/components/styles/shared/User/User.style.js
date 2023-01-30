import styled from "styled-components";
import { devices } from "../../deviceWidth";

// Welcome section

export const StyledWelcomeSection = styled.div`
  width: 100%;
  max-height: 50vh;
  padding-top: 65px;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const StyledWelcomeImgContainer = styled.div`
  width: 1024px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: black 00px 30px 90px -12px inset, black 0px 18px 90px -18px inset;
  background-image: url(${({ photo }) => photo});
  background-position: center;
  background-size: cover;
`;

export const StyledUserName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  font-weight: 700;
  color: white;
  gap: 10px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

// movie card

export const StyledMovieCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 12px;
  width: 100px;
  height: 100%;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 6px;
  }
  @media ${devices.tablet} {
    width: 140px;
  }
`;

// one section

export const StyledOneSectionContainer = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px 0 10px;

  @media ${devices.desktop} {
    width: 1024px;
  }
`;

export const StyledSectionTitle = styled.div`
  font-size: 24px;
`;

export const StyledOneSectionList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  @media ${devices.desktop} {
    gap: 32px;
    justify-content: flex-start;
  }
`;

export const StyledShowMoreBtn = styled.button`
  display: ${({ show }) => (show ? "block" : "none")};
  align-self: center;
  background-color: #fff;
  padding: 12px 60px;
  border: 1px solid black;
  font-size: 16px;
  transition: 0.5s;
  color: black;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;

// section header

export const StyledSectionHeaderContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledSectionHeader = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  padding: 40px 0 20px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
  @media ${devices.desktop} {
    width: 1024px;
  }
`;

export const StyledCountedList = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledIconNr = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledOneCount = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  @media ${devices.tablet} {
    gap: 10px;
    flex-direction: row;
  }
`;

// No movies info

export const StyledNoMoviesInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ shrink }) => (shrink ? "1024px" : "100%")};
  padding: 40px;
  box-sizing: border-box;
`;
