import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box, Button, Container, Grid } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/Logo/WolfPaw.png';
import './Navbar.css';

const pages = [
  { name: 'HOME', path: '/' },
  { name: 'PRODUCT', path: '/Product' },
  { name: 'ABOUT', path: '/about' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState('/');
  const [loggedIn, setLoggedIn] = React.useState(false); // Replace with actual auth logic

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (path) => {
    setActivePage(path);
    handleCloseNavMenu();
  };

  const handleLoginLogout = () => {
    if (loggedIn) {
      // Logic for logging out
      setLoggedIn(false);
    } else {
      // Redirect to login page
      navigate('/login');
    }
  };

  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left side menu for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                className={`nav-button ${activePage === page.path ? 'active-nav-button' : ''}`}
                onClick={() => handlePageClick(page.path)}
                sx={{ mx: 2 }} // Add margin between menu items
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Logo centered */}
          <Grid container justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
            <Grid item>
              <img src={logo} alt="Logo" className="logo" />
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{ display: { xs: 'none', md: 'block' } }}
                className="navbar-text"
              >
                WolfWalk
              </Typography>
            </Grid>
          </Grid>

          {/* Login/Logout button at right end */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <Button color="inherit" onClick={handleLoginLogout} className="login-button">
              {loggedIn ? 'Logout' : 'Logout'}
            </Button>
          </Box>

          {/* Menu for small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handlePageClick(page.path)} className="menu-item">
                  <Link to={page.path} className={`nav-link`}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
