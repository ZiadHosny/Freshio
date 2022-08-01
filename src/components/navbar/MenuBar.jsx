import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';
import { ModalContext } from '../../context/ModalContext';
import { UserAuth } from '../../context/AuthContext';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BiSearchAlt } from 'react-icons/bi';
import './MenuBar.css';
import logo from '../../assets/logo.svg';
import { wishListContext } from '../../context/wishList';
import { FavoritesContext } from '../../context/FavoritesContext';

const MenuBar = () => {
  let { addToCart } = useContext(wishListContext);
  const { favoritesItems } = useContext(FavoritesContext);
  const { setModal } = ModalContext();
  const { user, logOut } = UserAuth();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    handleCloseUserMenu();
    setModal('login');
  };

  const handleSignUp = () => {
    handleCloseUserMenu();
    setModal('signUp');
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    logOut();
  };

  return (
    
    <div className="d-flex my-2 justify-content-around align-items-center ">
      <div>
        <Link to="/">
          <img src={logo} className="w-50" alt="/" />
        </Link>
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

          {user?.email ? (
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
              <Link to="/account">
                <MenuItem>
                  <Typography className="text-color">Account</Typography>
                </MenuItem>
              </Link>
              <MenuItem onClick={handleLogout}>
                <Typography className="text-color">Logout</Typography>
              </MenuItem>
            </Menu>
          ) : (
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
              <MenuItem onClick={handleLogin}>
                <Typography className="text-color">Login</Typography>
              </MenuItem>
              <MenuItem onClick={handleSignUp}>
                <Typography className="text-color">Sign Up</Typography>
              </MenuItem>
            </Menu>
          )}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open Cart">
            <Link to="cartList">
              <IconButton sx={{ p: 0 }}>
                <ShoppingCartIcon
                  className="count-parent"
                  style={{ color: '#0a472e', fontSize: 40, paddingRight: 10 }}
                />
                <div className="cart-count">{addToCart}</div>
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open Favorites">
            <Link to="favoritesList">
              <IconButton sx={{ p: 0 }}>
                <FavoriteIcon style={{ color: '#0a472e', fontSize: 40 }} />
                <div className="wish-count">{favoritesItems?favoritesItems.length:0}</div>
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      </div>
    </div>
  );
};

export default MenuBar;
