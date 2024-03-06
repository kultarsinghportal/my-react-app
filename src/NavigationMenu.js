import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';

const NavigationMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
        <ListItemButton button onClick={onClose}>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton button onClick={onClose}>
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton button onClick={onClose}>
          <ListItemText primary="Services" />
        </ListItemButton>
        <ListItemButton button onClick={onClose}>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default NavigationMenu;