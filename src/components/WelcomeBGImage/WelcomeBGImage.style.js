import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledWelcomeBG = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-position: center top;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
  @media ${devices.desktop} {
    display: block;
  }
`;
