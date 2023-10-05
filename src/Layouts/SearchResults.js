import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const SearchResults = ({ results }) => {
  return (
    <>
      <div className="search-results-container">
        <div className="d-flex">
          <p className="output">
            {results.map((result, id) => {
              return (
                <Link
                  to={`/profile/${result.id}`}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px",
                    margin: 0,
                    textDecoration: "none",
                    display: "block",
                  }}
                  key={id}>
                  {result.name}
                </Link>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
