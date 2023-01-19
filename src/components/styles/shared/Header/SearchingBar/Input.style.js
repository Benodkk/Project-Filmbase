import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  font-size: 60px;
  padding-bottom: 5px;
  margin: 50px;
  border: none;
  border-bottom: 2px solid gray;
  transition: border-color 1s;

  &:focus {
    border-bottom-color: #ffc200;
    outline: none;
  }
`;

export const StyledHeaderInput = styled.fieldset`
  display: flex;
  align-items: center;
  background-color: #fff;
  margin: 0px;
  border: none;
  padding: 0;
  img {
    width: 30px;
    padding: 5px;
  }
  input {
    width: 100%;
    border: none;
    font-size: 16px;
  }
`;
