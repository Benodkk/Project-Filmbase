import { BrowserRouter, Routes, Route } from "react-router-dom";

import TestComponent from "./TestComponent";

import Header from "./components/Header";
import { StyledBlackScreen } from "./components/styles/shared/HiddenCard/HiddenCard.style";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <StyledBlackScreen isHovered="true" /> */}
      <Routes>
        <Route path="/" element={<TestComponent />} />
        {/* <Route path="/:kind" element={} /> */}
        {/* <Route path="/store/:kind/:nr" element={} /> */}
        {/* <Route path="/ranking/:kind" element={} /> */}
        {/* <Route path="/ranking/people/:kind" element={} /> */}
        {/* <Route path="/User" element={} /> */}
        {/* <Route path="/User/list/:kind" element={} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default RouteSwitch;
