import styled from "styled-components";

export const StyledWelcomeSection = styled.div`
  width: 100%;
  max-height: 50vh;
  padding-top: 65px;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const StyledWelcomeImgContainer = styled.div`
  width: 1024px;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: black 00px 30px 90px -12px inset, black 0px 18px 90px -18px inset;
  background-image: url(${({ photo }) => photo});
  background-position: center;
  background-size: cover;
`;
