import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl, publicKey } from "../config";

/**
 * The Series component displays a list of series associated with a character.
 * It fetches and displays the series data for the selected character.
 */
function Series() {
  // State to store the series data
  const [seriesData, setSeriesData] = useState([]);

  // State to manage the loading status
  const [loading, setLoading] = useState(true);

  // Get the characterId from the route parameters using useParams
  const { characterId } = useParams();

  // Fetch and set the series data when the characterId changes
  useEffect(() => {
    // Check if characterId is defined before fetching data
    if (characterId) {
      const fetchData = async () => {
        try {
          // Construct the API URL for fetching series data
          const api = `${apiBaseUrl}/${characterId}/series?apikey=${publicKey}`;

          // Fetch series data from the API
          const response = await axios.get(api);
          const data = response.data.data.results;

          // Update the state with the fetched series data
          setSeriesData(data);

          // Set loading to false when data is fetched
          setLoading(false);
        } catch (err) {
          console.error(err);

          // Set loading to false in case of an error
          setLoading(false);
        }
      };

      // Call the fetchData function
      fetchData();
    }
  }, [characterId]);

  // Conditional rendering based on the loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {seriesData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Series;
