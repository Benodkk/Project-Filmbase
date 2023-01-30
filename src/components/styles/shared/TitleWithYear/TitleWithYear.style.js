import styled from "styled-components";
import { devices } from "../../deviceWidth";

export const StyledTitleWithYear = styled.div`
  gap: 5px;
  font-size: 20px;
  display: ${({ isColumn }) => (isColumn ? "block" : "flex")};
`;
