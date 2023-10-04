import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl, publicKey } from "../config";

function Comics() {
  const [Comic, setComics] = useState({});
  const [loading, setLoading] = useState(true); // Add a loading state

  // Call useParams to get the route parameters
  const { characterId } = useParams();

  useEffect(() => {
    console.log({ characterId });
    // Make sure characterId is defined before fetching data
    if (characterId) {
      const fetchData = async () => {
        try {
          const api = `${apiBaseUrl}/${characterId}/comics?apikey=${publicKey}`;

          const response = await axios.get(api);
          const data = response.data.data.results;
          setComics(data);
          console.log(data);
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
      <h1>Comics</h1>
      {Comic.map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
        </ul>
      ))}
    </>
  );
}

export default Comics;
