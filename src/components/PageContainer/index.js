import React from "react";
import { StyledPageContainer } from "./PageContainer.style";

const PageContainer = ({ children }) => {
  return <StyledPageContainer>{children}</StyledPageContainer>;
};

export default PageContainer;
