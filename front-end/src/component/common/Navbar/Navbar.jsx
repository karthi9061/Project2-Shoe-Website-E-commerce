import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import logo from '../../../assets/Logo/WolfPaw.png';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const pages = [
  { name: 'HOME', path: '/' },
  { name: 'MEN', path: '/mens' },
  { name: 'WOMEN', path: '/women' },
  { name: 'KIDS', path: '/kids' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const location = useLocation(); // Get the current route

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenProfileMenu = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorElProfile(null);
  };

  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.path}
                    className={`nav-link ${location.pathname === page.path ? 'active-link' : ''}`}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                className={`nav-button ${location.pathname === page.path ? 'active-nav-button' : ''}`}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Grid container justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
            <Grid item>
              <img
                src={logo}
                alt="Logo"
                className="logo"
              />
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

          <Search className="search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <IconButton
              color="inherit"
              component={Link}
              to="/favorites" 
              className="icon-button"
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component={Link}
              to="/cart" 
              className="icon-button"
            >
              <ShoppingBagIcon />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={handleOpenProfileMenu}
              className="icon-button"
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElProfile}
              open={Boolean(anchorElProfile)}
              onClose={handleCloseProfileMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              className="profile-menu"
            >
              <MenuItem onClick={handleCloseProfileMenu}>
                <Link to="/account" className="profile-menu-item">
                  Account
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseProfileMenu}>
                <Link to="/login" className="profile-menu-item">
                  Login
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
