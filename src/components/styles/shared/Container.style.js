import styled from "styled-components";

export const StyledVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ shrink }) => (shrink ? "1024px" : "100%")};
  gap: ${({ gap }) => gap};
  padding-top: ${({ padding }) => padding};
  padding-bottom: ${({ padding }) => padding};
  padding-left: ${({ paddingSide }) => paddingSide};
  padding-right: ${({ paddingSide }) => paddingSide};
  box-sizing: border-box;
  background-color: ${({ BGcolor }) => BGcolor};
  color: ${({ color }) => color};
  z-index: ${({ zIndex }) => zIndex};
`;

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledListHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  box-sizing: border-box;
  padding: 40px 20px;
  background-color: ${({ BGcolor }) => BGcolor};
  color: ${({ color }) => color};
  gap: ${({ gap }) => gap};
`;
