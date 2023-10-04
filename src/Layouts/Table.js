import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiBaseUrl, publicKey } from "../config";
import "./Table.css";

/**
 * The Table component displays a table of Marvel characters, including their ID, name, description,
 * and thumbnail image. It also provides pagination for navigating through the character list.
 */
const Table = () => {
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
      {/* Table displaying character information */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link to={`/profile/${item.id}`} className="profile-link">
                  {item.name}
                </Link>
              </td>
              <td>{item.description || "Description not available"}</td>
              <td>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt="Character Thumbnail"
                  className="characterImage"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination">
        <button className="page-item" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          &laquo; Prev
        </button>
        <span>Page {currentPage}</span>
        <button className="page-item" onClick={() => setCurrentPage(currentPage + 1)}>
          Next &raquo;
        </button>
      </div>
    </>
  );
};

export default Table;
