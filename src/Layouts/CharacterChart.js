import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const CharacterChart = ({ data }) => {
  // Use state to manage enabled characters
  const [enabledCharacters, setEnabledCharacters] = useState();

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

    /* Initializing the `enabledCharacters` state with all characters enabled. */
    data.forEach((character) => {
      initialEnabledCharacters[character.name] = true;
    });
    setEnabledCharacters(initialEnabledCharacters);
  }, [data]);

  // Filter the data based on the enabled characters
  const filteredData = data.filter((character) => enabledCharacters[character.name]);

  return (
    <>
      <div>
        {data.map((character) => (
          <label key={character.name}>
            <input
              type="checkbox"
              checked={enabledCharacters[character.name]}
              onChange={() => toggleCharacter(character.name)}
            />
            {character.name}
          </label>
        ))}
      </div>

      <BarChart
        width={1300}
        height={500}
        data={filteredData} // Use filtered data
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="comics.available" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default CharacterChart;
