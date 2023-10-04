import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Search = () => {
  const [results, setResults] = useState([]);
  return (
    <>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </>
  );
};

export default Search;
