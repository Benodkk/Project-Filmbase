import styled from "styled-components";

export const StyledHorizontalSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${({ gap }) => gap};
`;

export const StyledHorizontalRow = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  gap: ${({ gap }) => gap};
`;
