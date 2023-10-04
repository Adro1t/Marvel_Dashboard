import axios from "axios";
import React, { useState } from "react";
import { apiBaseUrl, publicKey } from "../config";

/**
 * The SearchBar component renders an input field for searching characters and handles the search functionality.
 *
 * @param {object} props - The props object containing the setResults callback.
 */
const SearchBar = ({ setResults }) => {
  // State to store the input value
  const [input, setInput] = useState("");

  /**
   * Fetches character data from the API based on the search value and updates the results.
   *
   * @param {string} value - The search value entered by the user.
   */
  const fetchData = async (value) => {
    try {
      const api = `${apiBaseUrl}?apikey=${publicKey}`;
      const response = await axios.get(api);
      const data = response.data.data.results;

      // Filter the results based on the search value
      const results = data.filter((character) => {
        return value && character && character.name && character.name.toLowerCase().includes(value);
      });

      // Update the results state
      setResults(results);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Handles the change event of the input field and triggers the search.
   *
   * @param {string} value - The new input value.
   */
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
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
  );
};

export default SearchBar;
