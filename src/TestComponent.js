import React from "react";
import db from "./database/db.json";

import MovieCard from "./components/MovieCard";

let allData = db.films;

function TestComponent() {
  return (
    <div className="TestComponent">
      <MovieCard movie={allData[0]} />
      <MovieCard movie={allData[1]} />
      <MovieCard movie={allData[2]} />
    </div>
  );
}

export default TestComponent;
