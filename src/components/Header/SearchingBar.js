import React, { useState } from "react";
import db from "./database/db.json";

let allData = db.films
  .concat(db.tvSeries)
  .concat(db.actors)
  .concat(db.writers)
  .concat(db.directors);

function SearchingBar() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  function search() {
    const newResults = [];
    for (let i = 0; i < allData.length; i++) {
      if (
        (allData[i].title &&
          allData[i].title.toLowerCase().startsWith(query.toLowerCase())) ||
        (allData[i].name &&
          allData[i].name.toLowerCase().startsWith(query.toLowerCase()))
      ) {
        newResults.push({ item: allData[i], match: query.length });
      }
    }
    newResults.sort((a, b) => b.match - a.match);

    // Delete elemets, from previous result if they are in new matching result
    const updatedResults = results.filter(
      (oldResult) =>
        !newResults.some((newResult) => newResult.item.id === oldResult.item.id)
    );

    setResults([...newResults, ...updatedResults].slice(0, 6));
  }
  return (
    <div className="SearchingBar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={search}
      />
      {results.map((result) => (
        <div key={result.item.id}>{result.item.title || result.item.name}</div>
      ))}
    </div>
  );
}

export default SearchingBar;
