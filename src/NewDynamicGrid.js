import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';

// Assuming each application has an API health check endpoint
const appInfo = new Map([
  ['Application 1', { url: 'https://example.com', apiEndpoint: '/health' }],
  ['Application 2', { url: 'https://jsonplaceholder.typicode.com', apiEndpoint: '/posts/1' }],
  ['Application 3', { url: 'https://postman-echo.com', apiEndpoint: '/get' }],
  // Add more applications and their API endpoints as needed
]);

const NewDynamicGrid = () => {
  const [appStatus, setAppStatus] = useState({});

  useEffect(() => {
    const checkAppHealth = async () => {
      const statusUpdates = {};
      await Promise.all([...appInfo].map(async ([appName, { url, apiEndpoint }]) => {
        try {
          // Combining the URL with the API endpoint for the health check
          const fullApiUrl = `${url}${apiEndpoint}`;
          const response = await axios.get(fullApiUrl);
          response.data = 'working';
          // Example condition: setting to green if API response contains "working"
          statusUpdates[appName] = response.data.includes('working') ? 'green' : 'red';
        } catch (error) {
          console.error(`Error fetching ${url}:`, error);
          statusUpdates[appName] = 'red'; // Set to red if there's an error
        }
      }));
      setAppStatus(statusUpdates);
    };

    checkAppHealth();
  }, []);

  return (
    <Grid container spacing={2}>
      {[...appInfo].map(([appName, _]) => (
        <Grid key={appName} item xs={12} sm={4} md={3} lg={2}>
          <Paper style={{ backgroundColor: appStatus[appName] || 'grey', padding: 16 }}>
            <p>{appName}</p>
            {/* Additional content for each item */}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewDynamicGrid;
