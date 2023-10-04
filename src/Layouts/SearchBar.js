import axios from "axios";
import React, { useState } from "react";
import { apiBaseUrl, publicKey } from "../config";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = async (value) => {
    try {

      const api = `${apiBaseUrl}?apikey=${publicKey}`;
        const response = await axios.get(api);
        const data = response.data.data.results;
        console.log(data);

        const results = data.filter((character) => {
          return value && character && character.name && character.name.toLowerCase().includes(value);
        });

        console.log(results);
        setResults(results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
