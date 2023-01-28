import styled from "styled-components";

// list container

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

export const StyledRankingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ shrink }) => (shrink ? "1024px" : "100%")};
  box-sizing: border-box;
  gap: 20px;
  padding: 20px;
`;

// list type

export const StyledListTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledListType = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// list filter

export const StyledBottomHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledFilterDiv = styled.div`
  color: ${({ selected, theme }) => (selected ? "black" : theme.colors.grey)};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.gold : ""};
  text-align: center;
  padding: 4px 8px;
  font-size: ${({ fontSize }) => fontSize};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
    background-color: ${({ theme }) => theme.colors.gold};
  }
  a {
    color: inherit;
  }
`;

export const StyledFilterBtn = styled.div`
  color: white;
  padding: 4px 8px;
  border: 1px solid white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  display: ${({ show }) => (show ? "block" : "none")};
  &:hover {
    color: black;
    background-color: ${({ theme }) => theme.colors.gold};
    border-color: black;
  }
`;

export const StyledFilterContainer = styled.div`
  transition: 0.5s;
  padding-top: ${({ show }) => (show ? "20px" : "0")};
  height: ${({ show }) => (show ? "24px" : "0")};
  overflow: hidden;
  width: 100%;
`;

export const StyledFilterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

// list sort

export const StyledSortContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 350px;
  padding: 20px 20px 0;
`;

export const StyledSelectSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  cursor: pointer;
`;

export const StyledSelectArrow = styled.img`
  width: 30px;
  transition: 0.5s;
  transform: ${({ show }) => (show ? "rotateX(180deg)" : "rotateX(0)")};
`;

export const StyledSortElement = styled.div`
  padding: 5px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  &:last-child {
    border-bottom: none;
  }
`;

export const StyledSortLabel = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  width: 50%;
`;

export const StyledSortValues = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  align-items: ${({ alignItems }) => alignItems};
  gap: 5px;
  white-space: nowrap;
`;

export const StyledSort = styled.div`
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const StyledSortListContainer = styled.div`
  position: absolute;
  overflow: hidden;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  padding: 0px 10px 10px;
  transform: translate(-10px);
  z-index: 3;
`;

export const StyledSortList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: 0.5s;
  box-sizing: border-box;
  min-width: 350px;
  padding: 5px;
  box-shadow: ${({ show }) => (show ? "rgba(0, 0, 0, 0.2) 0px 4px 10px" : "")};
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-110%)")};
`;

// ranking card

export const StyledRankingCardContainer = styled.div`
  display: flex;
  width: 100%;
  border: rgba(0, 0, 0, 0.2) 1px solid;
`;

export const StyledIndexNr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: ${({ width }) => width + "px"};
`;

export const StyledRankingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px;
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

export const StyledGenre = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  gap: 5px;
`;

// SwitchPage

export const StyledButtonsContainer = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  gap: 5px;
  padding: 15px;
`;

export const StyledButton = styled.button`
  font-size: 18px;
  padding: 8px;
  border: none;
  color: ${({ selected }) => (selected ? "white" : "black")};
  background-color: ${({ selected }) => (selected ? "black" : "white")};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;
