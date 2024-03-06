import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const FooterComponent = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Container>
          <Typography variant="body1" color="inherit">
            &copy; {new Date().getFullYear()} Front of House Support
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default FooterComponent;