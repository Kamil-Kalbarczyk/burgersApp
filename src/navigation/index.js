import {Link} from 'react-router-dom'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'

const navItems = [
  {label: 'Home', path: '/'},
  {label: 'Menu', path: '/menu'},
  {label: 'Admin', path: '/admin'}
]

export const Navigation = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
              <IconButton sx={{ p: 0 }}>
                <Avatar variant="rounded" alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/877/877951.png" />
              </IconButton>
              {navItems.map((item)=>(
                <Button key={item.label} component={Link} to={item.path} sx={{my:2, color:'white'}}>
                  {item.label}
                </Button>
              ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
