import styled from "styled-components";

export const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ shrink }) => (shrink ? "1024px" : "100%")};
  z-index: 1;
  margin-top: 20vh;
  padding-bottom: 5vh;
  background-color: #fff;
`;

// list

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ shrink }) => (shrink ? "1024px" : "100%")};
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledListElement = styled.div`
  display: flex;
  width: 100%;
  border: rgba(0, 0, 0, 0.2) 1px solid;
`;

export const StyledListCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
`;

export const StyledLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
`;

export const StyledRightSideCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 300px;
  height: 100%;
`;
