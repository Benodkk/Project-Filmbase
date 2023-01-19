import styled from "styled-components";

export const StyledResults = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 10px;
  width: 100%;
`;

export const StyledOneResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-wrap: break-word;
  text-align: center;
  width: ${({ width }) => width};
`;

export const StyledTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledSearchingResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  padding: 50px 0;
  transition: opacity 0.5s;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  visibility: ${({ isFocused }) => (isFocused ? "visible" : "hidden")};
`;

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
