import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../../assets/logo.svg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import './ContainerModal.css';

import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

import Copyright from '../../shared/Copyright';
import { ModalContext } from '../../context/ModalContext';

export default function SignIn({ onClick }) {
  const { login } = UserAuth();
  const { setModal } = ModalContext();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setError('');
    try {
      await login(data.email, data.password);
      setModal('');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    reset();
  };

  const handleSwitch = () => {
    setModal('signUp');
  };

  const { handleSubmit, reset } = useForm();

  return (
    <>
      <Container
        onClick={onClick}
        className="ContainerModal"
        component="main"
        maxWidth="xs"
      >
        <Box
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt="/" className="w-25  m-auto" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" style={{ width: '100%' }} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="bg-color"
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <p className="text-color">
                  I don't have an account?
                  <Button onClick={handleSwitch}>Sign Up</Button>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </>
  );
}
