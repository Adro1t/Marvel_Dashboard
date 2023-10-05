import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterChart from "../Layouts/CharacterChart";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import { apiBaseUrl, publicKey } from "../config";

/**
 * The ChartPage component displays a page with a character chart and pagination controls.
 */
const ChartPage = () => {
  const itemsPerPage = 20;

  // State to store the list of characters and current page number
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    /**
     * Fetches character data from the Marvel API based on the current page and updates the state.
     */
    const fetchData = async () => {
      try {
        // Calculate the offset based on the current page
        const offset = (currentPage - 1) * itemsPerPage;
        const api = `${apiBaseUrl}?apikey=${publicKey}&offset=${offset}`;

        const response = await axios.get(api);
        const datum = response.data.data.results;

        // Update the state with character data
        setCharacters(datum);
      } catch (err) {
        console.error(err);
      }
    };

    // Fetch data when the component mounts or when the currentPage changes
    fetchData();
  }, [currentPage]);

  return (
    <>
      <Navbar />
      <CharacterChart data={characters} />

      {/* Pagination controls */}
      <div className="pagination justify-content-center">
        <button
          className={`page-item btn btn-danger ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => setCurrentPage(currentPage - 1)}>
          &laquo; Prev
        </button>
        <span className="page-number">Page {currentPage}</span>
        <button className="page-item btn btn-danger" onClick={() => setCurrentPage(currentPage + 1)}>
          Next &raquo;
        </button>
      </div>

      <Footer />
    </>
  );
};

export default ChartPage;
