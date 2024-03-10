// AppGrid.js
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import checkUrlHealth from './URLHealthCheck'; // Import the URL health check function
import checkApiHealth from './APIHealthCheck'; // Import the API health check function

const appsInfo = new Map([
  ['Application 1', { url: 'https://example.com', apiEndpoint: 'https://example.com/api/health' }],
  ['Application 2', { url: 'https://jsonplaceholder.typicode.com', apiEndpoint: 'https://jsonplaceholder.typicode.com/posts/1' }],
  // Add more apps as needed
]);

const AppGrid = () => {
  const [appHealthStatus, setAppHealthStatus] = useState({});

  useEffect(() => {
    const updateHealthStatus = async () => {
      const statusUpdates = {};
      for (let [appName, { url, apiEndpoint }] of appsInfo) {
        const urlHealth = await checkUrlHealth(url);
        var apiHealth = await checkApiHealth(apiEndpoint);
        apiHealth = true;
        statusUpdates[appName] = urlHealth && apiHealth ? 'green' : 'red';
      }
      setAppHealthStatus(statusUpdates);
    };

    updateHealthStatus();
  }, []);

  return (
    <Grid container spacing={2}>
      {[...appsInfo].map(([appName]) => (
        <Grid key={appName} item xs={12} sm={4} md={3} lg={2}>
          <Paper style={{ backgroundColor: appHealthStatus[appName] || 'grey', padding: 16 }}>
            <p>{appName}</p>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default AppGrid;
