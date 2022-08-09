import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link className="text-color" to={'/Freshio'}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
