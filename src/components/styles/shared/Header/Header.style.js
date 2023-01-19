import styled from "styled-components";

export const StyledHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1024px;
  padding: 10px 0;
`;

export const StyledHeaderContainer = styled.header`
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 65px;
  background-color: black;
`;
