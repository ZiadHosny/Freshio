import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import ApiContext from './context/ApiContext';
import { DetailsProvider } from './context/DetailsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/Freshio'>
    <ThemeProvider theme={theme}>
      <ApiContext>
        <DetailsProvider>
          <App />
        </DetailsProvider>
      </ApiContext>
    </ThemeProvider>
  </BrowserRouter>
);
