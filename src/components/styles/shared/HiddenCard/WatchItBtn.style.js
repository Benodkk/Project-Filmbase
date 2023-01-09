import styled from "styled-components";

const StyledWatchItBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 0.5px solid rgb(0, 0, 0, 0.2);
  transition: 0.5s;
  padding: 2px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    border: 0.5px solid rgb(0, 0, 0);
  }
`;

export default StyledWatchItBtn;
