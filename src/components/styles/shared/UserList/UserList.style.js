import styled from "styled-components";
import { devices } from "../../deviceWidth";

export const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  padding-bottom: 5vh;
  margin-top: 65px;
  background-color: #fff;
  @media ${devices.desktop} {
    width: 1024px;
    margin-top: 20vh;
  }
`;

// list

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  padding: 5px;
  box-sizing: border-box;
  @media ${devices.tablet} {
    width: 1024px;
    gap: 20px;
    padding: 20px;
  }
`;

export const StyledListElement = styled.div`
  display: flex;
  width: 100%;
  border: rgba(0, 0, 0, 0.2) 1px solid;
`;

export const StyledListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  @media ${devices.tablet} {
    padding: 20px;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
`;

export const StyledRightSideCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 300px;
  height: 100%;
`;
