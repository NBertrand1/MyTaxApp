import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
//import { Link } from 'react-router-dom';

const NavBar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Mon Application
            </Typography>
            <Button component={Link} to="/" color="inherit">
                Accueil
            </Button>
            <Button component={Link} to="/about" color="inherit">
                À propos
            </Button>
        </Toolbar>
    </AppBar>
);

export default NavBar;
