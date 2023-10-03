import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams

import { apiBaseUrl, publicKey } from "../config";

const CharacterProfile = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true); // Add a loading state

  // Call useParams to get the route parameters
  const { productId } = useParams();

  useEffect(() => {
    // Check if productId is defined (for debugging purposes)
    console.log("productId:", productId);

    // Make sure productId is defined before fetching data
    if (productId) {
      const fetchData = async () => {
        try {
          const api = `${apiBaseUrl}/${productId}?apikey=${publicKey}`;

          const response = await axios.get(api);
          const data = response.data.data.results;
          console.log(api);
          console.log(data[0]);
          setCharacter(data[0]);
          setLoading(false); // Set loading to false when data is fetched
        } catch (err) {
          console.error(err);
          setLoading(false); // Set loading to false in case of an error
        }
      };

      fetchData();
    }
  }, [productId]);

  // Conditional rendering based on the loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
      <h1>Comics</h1>
      <p>{character.comics.available}</p>
      <h1>Series</h1>
      <p>{character.series.available}</p>
    </>
  );
};

export default CharacterProfile;
