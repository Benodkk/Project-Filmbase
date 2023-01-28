import styled from "styled-components";

export const StyledStarRatingContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "" : "column")};
  align-items: ${({ row }) => (row ? "flex-end" : "center")};
  gap: ${({ row }) => (row ? "10px" : "5px")};
`;

export const StyledStarRating = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 28px;
  gap: 5px;
`;

export const StyledRatingNumber = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "column" : "")};
  gap: ${({ row }) => (row ? "" : "5px")};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
`;
