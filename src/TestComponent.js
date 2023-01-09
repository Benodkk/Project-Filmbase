import React from "react";
import db from "./database/db.json";

import MovieCard from "./components/MovieCard";

let allData = db.films;

function TestComponent() {
  return (
    <div className="TestComponent" style={{ margin: "50px" }}>
      <MovieCard movie={allData[0]} cardWidth={12} />
      <MovieCard movie={allData[1]} cardWidth={18} />
      <MovieCard movie={allData[2]} cardWidth={18} />
    </div>
  );
}

export default TestComponent;
