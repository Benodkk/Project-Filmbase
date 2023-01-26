import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: black;
`;

export const StyledFooterLink = styled.div`
  font-weight: 700;
  a:-webkit-any-link {
    transition: color 0.3s;
    color: white;
    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;
