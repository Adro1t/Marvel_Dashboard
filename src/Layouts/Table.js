import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiBaseUrl, publicKey } from "../config";
import "./Table.css";

const Table = () => {
  const itemsPerPage = 20;

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = (currentPage - 1) * itemsPerPage;
        const api = `${apiBaseUrl}?apikey=${publicKey}&offset=${offset}`;

        const response = await axios.get(api);
        const data = response.data.data.results;
        console.log(api);
        console.log(data);
        setCharacters(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [currentPage]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Thumbnails</th>
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

      {/* Pagination */}
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
