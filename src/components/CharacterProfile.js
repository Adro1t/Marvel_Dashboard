import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comics from "../Layouts/Comics";
import Series from "../Layouts/Series";
import { apiBaseUrl, publicKey } from "../config";

/**
 * The CharacterProfile component displays details of a Marvel character
 * based on the character's ID obtained from the route parameters.
 */
const CharacterProfile = () => {
  // State to store character data and loading status
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  // Get the characterId from route parameters using useParams
  const { characterId } = useParams();

  useEffect(() => {
    // Fetch character data when the characterId changes
    if (characterId) {
      const fetchData = async () => {
        try {
          const api = `${apiBaseUrl}/${characterId}?apikey=${publicKey}`;

          const response = await axios.get(api);
          const data = response.data.data.results;
          setCharacter(data[0]);
          setLoading(false); // Set loading to false when data is fetched
        } catch (err) {
          console.error(err);
          setLoading(false); // Set loading to false in case of an error
        }
      };

      fetchData();
    }
  }, [characterId]);

  // Conditional rendering based on the loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Character information */}
      <div>CharacterProfile</div>
      <h1>Name</h1>
      <p>{character.name}</p>
      <h1>Description</h1>
      <p>{character.description || "Description not available"}</p>
      <h1>Thumbnail</h1>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="Character Thumbnail"
        className="characterImage"
      />

      {/* Display Comics component and count */}
      <Comics />
      <p>{character.comics.available}</p>

      {/* Display Series component and count */}
      <Series />
      <p>{character.series.available}</p>
    </>
  );
};

export default CharacterProfile;
