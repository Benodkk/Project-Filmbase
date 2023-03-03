import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledResults = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px 0;
  width: 100%;
`;

export const StyledOneResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  overflow-wrap: break-word;
  text-align: center;
  width: 100px;
  @media ${devices.tablet} {
    width: 140px;
  }
`;

// trending

export const StyledTrendingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  @media ${devices.tablet} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const StyledTrendingType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`;
export const StyledTrendingTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const StyledTrendingTitle = styled.div`
  font-size: 20px;
`;
export const StyledCheckMore = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.brown};
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.darkGold};
  }
`;

// searching results

export const StyledSearchingResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 2;
  min-width: 100vw;
  min-height: 100vh;
  padding: 50px 0;
  transition: opacity 0.5s;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  visibility: ${({ isFocused }) => (isFocused ? "visible" : "hidden")};
  overflow-y: scroll;
`;

export const StyledSearchingResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 10px;
  padding: 0 10px;
  box-sizing: border-box;
  @media ${devices.desktop} {
    width: 1024px;
    padding: 0;
  }
`;

export const StyledInputInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  img {
    width: 20px;
  }
  @media ${devices.desktop} {
    font-size: 24px;
    img {
      width: 30px;
    }
  }
`;

export const StyledClose = styled.img`
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 40px;
  padding-bottom: 5px;
  margin: 20px;
  border: none;
  border-bottom: 2px solid gray;
  transition: border-color 1s;

  &:focus {
    border-bottom-color: #ffc200;
    outline: none;
  }
  @media ${devices.desktop} {
    font-size: 60px;
    margin: 50px;
  }
`;

export const StyledSearchImg = styled.img`
  width: 35px;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const StyledHeaderInput = styled.fieldset`
  display: none;
  align-items: center;
  background-color: #fff;
  margin: 0px;
  border: none;
  padding: 0;
  img {
    width: 30px;
    padding: 5px;
  }
  input {
    width: 100%;
    border: none;
    font-size: 16px;
  }
  @media ${devices.tablet} {
    display: flex;
  }
`;
