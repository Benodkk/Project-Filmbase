import styled from "styled-components";
import { devices } from "../deviceWidth";

export const StyledWelcomePhoto = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  background-image: url(${({ photo }) => photo});
  background-position: center top;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
  @media ${devices.desktop} {
    display: block;
  }
`;
