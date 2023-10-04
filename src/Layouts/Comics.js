import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl, publicKey } from "../config";

/**
 * The Comics component fetches and displays a list of comics related to a Marvel character.
 * It uses the characterId obtained from route parameters to fetch the character's comics.
 */
function Comics() {
  // State to store comics data and loading status
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the characterId from route parameters using useParams
  const { characterId } = useParams();

  useEffect(() => {
    // Fetch comics data when the characterId changes
    if (characterId) {
      const fetchData = async () => {
        try {
          const api = `${apiBaseUrl}/${characterId}/comics?apikey=${publicKey}`;

          const response = await axios.get(api);
          const data = response.data.data.results;
          setComics(data);
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
      {/* Display a list of comics */}
      <h1>Comics</h1>
      <ul>
        {comics.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Comics;
