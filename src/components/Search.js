import React from "react";
//pass in setCurrentSearch that sets the current search for the search bar input
function Search({setCurrentSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
