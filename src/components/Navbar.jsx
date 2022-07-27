import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/logo.svg';
import { BiSearchAlt } from 'react-icons/bi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ handleLoginClick, handleSignUpClick }) => {
  const handleClick = () => {
    handleLoginClick();
  };

  const handleSignUp = () => {
    handleSignUpClick();
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="d-flex mb-4 justify-content-around align-items-center ">
        <div>
          <img src={logo} className="w-50" />
        </div>

        <div className="box pe-5">
          <input type="checkbox" id="check" />
          <div className="search-box">
            <input type="text" placeholder="Type here..." />
            <label htmlFor="check" className="icon">
              <BiSearchAlt />
            </label>
          </div>
        </div>

        <div className="d-flex">
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon
                  style={{ color: '#0a472e', fontSize: 40, paddingRight: 10 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleClick}>
                <Typography className="loginicon">Login</Typography>
              </MenuItem>

              <MenuItem onClick={handleSignUp}>
                <Typography className="loginicon">Sgin Up</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Cart">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ShoppingCartIcon
                  style={{ color: '#0a472e', fontSize: 40, paddingRight: 10 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography onClick={handleClick} className="loginicon">
                  Login
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography onClick={handleSignUp} className="loginicon">
                  Sgin Up
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Favorites">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <FavoriteIcon style={{ color: '#0a472e', fontSize: 40 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography onClick={handleClick} className="loginicon">
                  Login
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography onClick={handleSignUp} className="loginicon">
                  Sgin Up
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </div>
      </div>

      <AppBar position="static" maxWidth="lg">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                <MenuItem>
                  <Typography onClick={handleClick} className="loginicon">
                    Login
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography onClick={handleSignUp} className="loginicon">
                    Sign Up
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography className="loginicon">Account</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                marginLeft: 50,
                display: { xs: 'none', md: 'flex' },
              }}
            ></Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
