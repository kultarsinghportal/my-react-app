import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const urls = new Map([
  ['Application 1', 'https://example.com'],
  ['Application 2', 'https://jsonplaceholder.typicode.com'],
  ['Application 3', 'https://postman-echo.com'],
  ['Application 4', 'https://example.com'],
  ['Application 5', 'https://api.openweathermap.org'],
  ['Application 6', 'https://example.com'],
  ['Application 7', 'https://example.com'],
  ['Application 8', 'https://example.com'],
  ['Application 9', 'https://example.com'],
  ['Application 10', 'https://jsonplaceholder.typicode.com'],
  ['Application 11', 'https://example.com'],
  ['Application 12', 'https://example.com'],
  ['Application 13', 'https://example.com'],
  ['Application 14', 'https://example.com'],
  ['Application 15', 'https://example.com']
  // Add more URLs as needed
]);

const DynamicGrid = () => {
  const [urlStatus, setUrlStatus] = useState({});

  useEffect(() => {
    const checkUrlHealth = async () => {
      const statusUpdates = {};
      await Promise.all([...urls].map(async ([appName, url]) => {
        try {
          const response = await fetch(url);
          statusUpdates[url] = response.ok ? 'green' : 'red';
        } catch (error) {
          console.error(`Error fetching ${url}:`, error);
          statusUpdates[url] = 'red'; // Set to red if there's an error fetching the URL
        }
      }));
      setUrlStatus(statusUpdates);
    };

    checkUrlHealth();
  }, []);

  return (
    <Grid container spacing={2}>
      {[...urls].map(([appName, url]) => (
        <Grid key={appName} item xs={12} sm={4} md={3} lg={2}>
          <Paper style={{ backgroundColor: urlStatus[url] || 'grey', padding: 16 }}>
            <p>{appName}</p>
            {/* Additional content for each item */}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DynamicGrid;
