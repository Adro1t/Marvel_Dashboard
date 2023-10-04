import React from "react";

const SearchResults = ({ results }) => {
  return (
    <>
      <div>SearchResults</div>
      {results.map((result, id) => {
        return <div key={id}>{result.name}</div>;
      })}
    </>
  );
};

export default SearchResults;
