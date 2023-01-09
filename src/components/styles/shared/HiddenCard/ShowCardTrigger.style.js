import styled from "styled-components";

const StyledShowCardTrigger = styled.div`
  position: absolute;
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffc200;
  background-color: ${({ bgc }) => bgc};
  padding: 0 4px;
  z-index: 1;
  img {
    width: ${({ width }) => width};
  }
`;

export default StyledShowCardTrigger;
