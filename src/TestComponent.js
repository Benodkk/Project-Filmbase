import React from "react";
import db from "./database/db.json";

import MovieCard from "./components/MovieCard";
import MainSite from "./pages/MainSite";

let allData = db.films;

function TestComponent() {
  return <MainSite />;
}

export default TestComponent;
