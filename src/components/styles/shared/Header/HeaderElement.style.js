import styled from "styled-components";

export const StyledHeaderElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ position }) => position};
  gap: 10px;
  font-size: 40px;
`;

export const StyledMenuElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 40px;
`;

export const StyledMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const StyledMenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  padding: 20px 15px 0;
  background-color: black;
  color: white;
  transform: ${({ showMenu }) =>
    showMenu ? "translateY(0)" : "translateY(-100%)"};
  transition: 0.3s;
  a {
    width: 100%;
    padding: 10px 5px;
    text-align: center;
    border-top: 1px solid grey;
    color: white;
    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;
