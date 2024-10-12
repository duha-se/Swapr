import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import profilePic from "../../assets/girlprof.png";
import logo from "../../assets/lo.png";
import Grid2 from '@mui/material/Grid';


export default function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#255b4e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid2 container alignItems="center" justifyContent="space-between">
            {/* Logo Section */}
            <Grid2 item>
           <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: '100px', height: 'auto' }} 
                />
              </Box>
            </Grid2>
            {/* Avatar Section */}
            <Grid2 item>
              <Box sx={{ flexGrow: 0 }}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Profile" src={profilePic} />
                </IconButton>
              </Box>
            </Grid2>
          </Grid2>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

 
