// src/DynamicGrid.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewDynamicGrid = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace 'api/selenium/getpagetitle?url=http://example.com' with your actual API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:yourPort/api/selenium/getpagetitle?url=http://example.com');
        setData(response.data);
      } catch (error) {
        console.error("There was an error fetching the API data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const gridStyle = {
    backgroundColor: data.includes('working') ? 'green' : 'transparent',
    // Add more styling as needed
  };

  return (
    <div style={gridStyle}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{data}</p>
          {/* Render your grid items here */}
        </div>
      )}
    </div>
  );
};

export default NewDynamicGrid;
