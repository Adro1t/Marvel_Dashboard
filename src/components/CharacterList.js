import React from "react";
import Navbar from "../Layouts/Navbar";
import Table from "../Layouts/Table";

/**
 * The CharacterList component represents a page that displays a list of Marvel characters.
 * It includes a navigation bar and a table to present the characters' information.
 */
const CharacterList = () => {
  return (
    <>
      {/* Include the Navbar component for navigation */}
      <Navbar />

      {/* Display the page title */}
      <h1>Marvel Characters</h1>

      {/* Include the Table component to display character information */}
      <Table />
    </>
  );
};

export default CharacterList;
