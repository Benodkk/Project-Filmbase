import styled from "styled-components";

export const StyledTypeSelect = styled.div`
  padding: 10px 20px;
  border-bottom: ${({ selected }) =>
    selected ? `3px solid gold` : `1px solid #888888`};
  cursor: pointer;
`;
