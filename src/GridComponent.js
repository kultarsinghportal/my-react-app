import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const GridComponent = () => {
  // Sample data for grid items
  const items = [
    { id: 1, title: 'Application 1' },
    { id: 2, title: 'Application 2' },
    { id: 3, title: 'Application 3' },
    { id: 4, title: 'Application 4' },
    { id: 5, title: 'Application 5' },
    { id: 6, title: 'Application 6' },

    // Add more items as needed
  ];

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item key={item.id} xs={4} sm={4} md={4} lg={4}>
          <Paper>
            <Typography variant="h6">{item.title}</Typography>
            {/* Additional content for each grid item */}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridComponent;