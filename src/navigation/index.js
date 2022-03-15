import {Link} from 'react-router-dom'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'

export const Navigation = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
              <IconButton sx={{ p: 0 }}>
                <Avatar variant="rounded" alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/877/877951.png" />
              </IconButton>
              <Button component={Link} to='/' sx={{my:2, color:'white'}}>
                  Home
              </Button>
              <Button component={Link} to='/menu' sx={{my:2, color:'white'}}>
                  Menu
              </Button>
              <Button component={Link} to='/admin' sx={{my:2, color:'white'}}>
                  Admin
              </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
