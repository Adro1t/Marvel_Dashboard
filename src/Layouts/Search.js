import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

/**
 * The Search component manages the state for search results and renders the search bar and results.
 * It initializes the state for results and passes a callback to the SearchBar component to update results.
 */
const Search = () => {
  // State to store search results
  const [results, setResults] = useState([]);

  return (
    <>
      {/* Render the SearchBar component and pass the setResults callback */}
      <SearchBar setResults={setResults} />

      {/* Render the SearchResults component and pass the results */}
      <SearchResults results={results} />
    </>
  );
};

export default Search;
