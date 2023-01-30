import styled from "styled-components";
import { devices } from "../deviceWidth";

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledListHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 40px 20px;
  background-color: black;
  color: white;
  gap: 20px;
  @media ${devices.desktop} {
    width: 1024px;
  }
`;
