import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    gold: "#FFC200",
    brown: "#976103",
    black: "black",
    darkGold: "#e7a90f",
    grey: "#888888",
  },
  fonts: [],
  fontSizes: {
    small12: "1.2rem",
    small14: "1.4rem",
    normal: "1.6rem",
    normal18: "1.8rem",
    big: "2.4rem",
    headers: "4rem",
  },
  screenSizes: {
    max: "1024px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
