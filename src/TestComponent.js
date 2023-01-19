import React from "react";
import db from "./database/db.json";

import MovieCard from "./components/MovieCard";
import MainSite from "./pages/MainSite";
import Ranking from "./pages/Ranking";

let allData = db.films;

function TestComponent() {
  return <Ranking />;
}

export default TestComponent;
