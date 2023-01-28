import styled from "styled-components";

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
  background-color: black;
  color: white;
  gap: ${({ gap }) => gap};
`;
