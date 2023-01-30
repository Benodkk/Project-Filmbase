import styled from "styled-components";

export const StyledTitleWithYear = styled.div`
  gap: 5px;
  font-size: 20px;
  display: ${({ isColumn }) => (isColumn ? "block" : "flex")};
`;
