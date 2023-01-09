import styled from "styled-components";

export const StyledMovieImg = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const StyledMovieImgLink = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  transition: 0.5s;

  &:hover {
    transform: scale(1.15);
  }
`;

export const StyledMovieImgContainer = styled.div`
  width: ${({ cardWidth }) => cardWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: hidden;
`;
