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
