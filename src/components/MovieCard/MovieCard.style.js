import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledMovieImgLink = styled.img`
  width: 100px;
  height: 144px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
  @media ${devices.tablet} {
    width: 140px;
    height: 198px;
  }
  cursor: ${({ isLink }) => (isLink ? "pointer" : "")};
  transition: transform 0.5s;
  &:hover {
    transform: ${({ isLink }) => (isLink ? "scale(1.15)" : "")};
  }
`;

export const StyledMovieImgContainer = styled.div`
  min-width: 100px;
  max-height: 144px;
  @media ${devices.tablet} {
    min-width: 140px;
    max-height: 198px;
  }
  overflow: hidden;
  z-index: 1;
`;
