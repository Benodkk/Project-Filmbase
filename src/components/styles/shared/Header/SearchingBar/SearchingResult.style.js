import styled from "styled-components";

export const StyledSearchingResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  padding: 50px 0;
  transition: opacity 0.5s;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  visibility: ${({ isFocused }) => (isFocused ? "visible" : "hidden")};
`;
