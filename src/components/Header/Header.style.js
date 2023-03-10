import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 10px 0;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${devices.desktop} {
    width: 1024px;
  }
`;

export const StyledHeaderContainer = styled.header`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 65px;
  background-color: black;
`;

export const StyledHeaderElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ position }) => position};
  gap: 10px;
  font-size: 40px;
`;

export const StyledLogo = styled.img`
  width: 40px;
`;

export const StyledMenuImg = styled.img`
  width: 40px;
  cursor: pointer;
`;

export const StyledWebsiteName = styled.div`
  color: white;
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
  visibility: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
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
