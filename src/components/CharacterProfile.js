import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comics from "../Layouts/Comics";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import Series from "../Layouts/Series";
import { apiBaseUrl, publicKey } from "../config";
import "./CharacterProfile.css";

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
      <Navbar />
      {/* Character information */}
      <div className="container text-dark">
        <div className="row">
          {/* Character Card */}
          <div className="col-md-10 offset-md-1">
            <div className="character-card">
              <h2>{character.name}</h2>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="Character Thumbnail"
                className="character-image"
              />
              <h4>Description</h4>
              <p>{character.description}</p>
              <h4>Comics</h4>
              {/* Display Comics component */}
              <Comics />
              <h4>Series</h4>
              {/* Display Series component */}
              <Series />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CharacterProfile;
