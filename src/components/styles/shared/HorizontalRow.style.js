import styled from "styled-components";

const HorizontalRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
`;

export default HorizontalRow;
