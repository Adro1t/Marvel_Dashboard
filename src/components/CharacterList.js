import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import Table from "../Layouts/Table";
import "../Layouts/Table.css";
import { apiBaseUrl, publicKey } from "../config";

/**
 * The CharacterList component represents a page that displays a list of Marvel characters.
 * It includes a navigation bar and a table to present the characters' information.
 */
const CharacterList = () => {
  // Number of characters to display per page
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
        const data = response.data.data.results;

        // Update the state with character data
        setCharacters(data);
      } catch (err) {
        console.error(err);
      }
    };

    // Fetch data when the component mounts or when the currentPage changes
    fetchData();
  }, [currentPage]);

  return (
    <>
      {/* Include the Navbar component for navigation */}
      <Navbar />

      <div
        className="container"
        style={{ backgroundColor: "white", color: "black", marginTop: "20px", borderRadius: "10px" }}>
        {/* Display the page title */}
        <h1 className="py-5">
          <center>Marvel Characters</center>
        </h1>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Thumbnail</th>
              </tr>
            </thead>
            <tbody>
              {/* Include the Table component to display character information */}
              {characters.map((item, i) => (
                <Table item={item} key={i} />
              ))}
            </tbody>
          </table>
        </div>

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
      </div>
      <Footer />
    </>
  );
};

export default CharacterList;
