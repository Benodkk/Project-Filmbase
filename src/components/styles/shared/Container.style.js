import styled from "styled-components";

export const StyledVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ shrink }) => (shrink ? "1024px" : "100%")};
  gap: ${({ gap }) => gap};
  padding-top: ${({ padding }) => padding};
  padding-bottom: ${({ padding }) => padding};
  background-color: ${({ BGcolor }) => BGcolor};
  color: ${({ color }) => color};
`;

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
