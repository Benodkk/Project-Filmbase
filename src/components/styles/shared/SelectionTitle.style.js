import styled from "styled-components";
import { devices } from "../deviceWidth";

export const StyledSelectionTitle = styled.h1`
  font-size: 32px;
  margin: 0;
  text-align: center;

  @media ${devices.desktop} {
    font-size: 40px;
  }
`;
