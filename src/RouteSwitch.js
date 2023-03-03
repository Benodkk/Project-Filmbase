import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Ranking from "./pages/Ranking";

import Header from "./components/Header";
import Footer from "./components/Footer";
import User from "./pages/User";
import UserList from "./pages/UserList";
import DetailsPage from "./pages/DetailsPage";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/ranking/movie/rate_down/no_filter/1" />}
        />
        <Route path="/:kind/:movie" element={<DetailsPage />} />
        <Route
          path="/ranking/:kind/:sort/:genre/:page_nr"
          element={<Ranking />}
        />
        <Route path="/user" element={<User />} />
        <Route path="/User/list/:kind/:page_nr" element={<UserList />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default RouteSwitch;
