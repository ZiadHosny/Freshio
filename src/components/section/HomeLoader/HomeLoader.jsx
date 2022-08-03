import React from 'react';
import './HomeLoader.css';
import logo from '../../../assets/logo.svg';
import { CircularProgress } from '@mui/material';
export default function HomeLoader() {
  return (
    <div className="loader">
      <img src={logo} className="w-15 my-4" alt="" />
      <CircularProgress />
    </div>
  );
}
