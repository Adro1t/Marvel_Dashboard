import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

/**
 * The CharacterChart component displays a bar chart for Marvel characters.
 *
 * @param {Object[]} data - An array of character data.
 */
const CharacterChart = ({ data }) => {
  // Use state to manage enabled characters
  const [enabledCharacters, setEnabledCharacters] = useState({});

  // Toggle the enabled/disabled state of a character based on their name
  const toggleCharacter = (characterName) => {
    setEnabledCharacters((prevEnabledCharacters) => ({
      ...prevEnabledCharacters,
      [characterName]: !prevEnabledCharacters[characterName],
    }));
  };

  useEffect(() => {
    // Initialize initialEnabledCharacters with all characters enabled
    const initialEnabledCharacters = {};

    // Initializing the `enabledCharacters` state with all characters enabled
    data.forEach((character) => {
      initialEnabledCharacters[character.name] = true;
    });
    setEnabledCharacters(initialEnabledCharacters);
  }, [data]);

  // Filter the data based on the enabled characters
  const filteredData = data.filter((character) => enabledCharacters[character.name]);

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <h5>Characters</h5>
          {data.map((character) => (
            <form className="col-md-3 col-sm-4" key={character.name}>
              <label>
                <input
                  type="checkbox"
                  checked={enabledCharacters[character.name]}
                  onChange={() => toggleCharacter(character.name)}
                />
                {character.name}
              </label>
              <br />
            </form>
          ))}
        </div>
        <div className="container my-5" style={{ backgroundColor: "white", color: "black", borderRadius: 10 }}>
          <h3 className="text-center">Bar Chart</h3>
          <ResponsiveContainer width={"99%"} height={500}>
            <BarChart
              // width={1000}
              // height={500}
              data={filteredData} // Use filtered data
              margin={{
                top: 30,
                right: 0,
                left: 0,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" width="100%" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="comics.available" fill="#8884d8" />
              <Bar dataKey="series.available" fill="black" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default CharacterChart;
