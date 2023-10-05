import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

/**
 * The Table component displays a table of Marvel characters, including their ID, name, description,
 * and thumbnail image. It also provides pagination for navigating through the character list.
 */
const Table = ({ item }) => {
  return (
    <>
      {/* Table displaying character information */}

      <tr>
        <td>
          <Link to={`/profile/${item.id}`} style={{ textDecoration: "none", fontWeight: "bolder" }}>
            {item.name}
          </Link>
        </td>
        <td>{item.description || "Description not available"}</td>
        <td>
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt="Character Thumbnail"
            className="characterImage"
            width={"100%"}
          />
        </td>
      </tr>
    </>
  );
};

export default Table;
