import styled from "styled-components";

export const StyledOpinionCircle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 0.5px solid black;
  font-size: 25px;
  background-color: black;
  color: #ffc200;
  z-index: 1;
  transition: 0.5s;
  transform: ${({ scale }) => scale};
`;
export const StyledUserCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 0.5px solid black;
  font-size: 30px;
`;
