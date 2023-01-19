import styled from "styled-components";

export const StyledImage = styled.img`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
`;

export const StyledActionImage = styled.img`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  cursor: pointer;
`;
