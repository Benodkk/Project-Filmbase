import styled from "styled-components";
import { devices } from "../../deviceWidth";

export const StyledMovieImg = styled.img`
  width: 100px;
  height: 144px;
  @media ${devices.tablet} {
    width: 140px;
    height: 198px;
  }
`;

export const StyledMovieImgLink = styled.img`
  width: 100px;
  height: 144px;
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
  width: 100px;
  max-height: 144px;
  @media ${devices.tablet} {
    width: 140px;
    max-height: 198px;
  }
  overflow: hidden;
  z-index: 1;
`;
