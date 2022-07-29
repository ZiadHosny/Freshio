import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BiSearchAlt } from 'react-icons/bi';

import './MenuBar.css';
import logo from '../../assets/logo.svg';

const MenuBar = ({ handleLoginClick, handleSignUpClick }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = () => {
    handleLoginClick();
  };

  const handleSignUp = () => {
    handleSignUpClick();
  };

  return (
    <div className="d-flex my-2 justify-content-around align-items-center ">
      <div>
        <img src={logo} className="w-50" alt="/" />
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
              <Typography className="loginicon">Sign Up</Typography>
            </MenuItem>
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open Cart">
            <Link to="cartList">
              <IconButton sx={{ p: 0 }}>
                <ShoppingCartIcon
                  style={{ color: '#0a472e', fontSize: 40, paddingRight: 10 }}
                />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open Favorites">
            <Link to="favoritesList">
              <IconButton sx={{ p: 0 }}>
                <FavoriteIcon style={{ color: '#0a472e', fontSize: 40 }} />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      </div>
    </div>
  );
};

export default MenuBar;
