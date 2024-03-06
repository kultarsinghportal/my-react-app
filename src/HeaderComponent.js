import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MenuComponent from './MenuComponent';
import NavigationMenu from './NavigationMenu';
const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <AppBar position="static">
      <Toolbar>
      <NavigationMenu isOpen={isMenuOpen} onClose={toggleMenu} />

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>FOH Dashboard</Typography>
       
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;