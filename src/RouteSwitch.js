import { BrowserRouter, Routes, Route } from "react-router-dom";

import TestComponent from "./TestComponent";
import MainSite from "./pages/MainSite";
import Ranking from "./pages/Ranking";

import Header from "./components/Header";
import User from "./pages/User";
import UserList from "./pages/UserList";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainSite />} />
        {/* <Route path="/:kind" element={} /> */}
        {/* <Route path="/store/:kind/:nr" element={} /> */}
        <Route
          path="/ranking/:kind/:sort/:genre/:page_nr"
          element={<Ranking />}
        />
        {/* <Route path="/ranking/people/:kind" element={} /> */}
        <Route path="/user" element={<User />} />
        <Route path="/User/list/:kind/:page_nr" element={<UserList />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default RouteSwitch;
