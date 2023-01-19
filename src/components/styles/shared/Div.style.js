import styled from "styled-components";

export const StyledDiv = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  text-align: center;
`;

export const StyledHoverDiv = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  transition: color 0.3s;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
