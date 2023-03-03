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
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
