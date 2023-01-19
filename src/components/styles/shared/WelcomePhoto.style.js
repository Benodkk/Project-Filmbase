import styled from "styled-components";

export const StyledWelcomePhoto = styled.div`
  position: absolute;
  width: 100%;
  background-image: url(${({ photo }) => photo});
  background-position: center top;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
`;
