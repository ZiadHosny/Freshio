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
import { Alert, Snackbar } from '@mui/material';

export default function SignIn({ onClick }) {
  const { login } = UserAuth();
  const { setModal } = ModalContext();
  const [open, setOpen] = useState(false);
  const [snackData, setSnackData] = useState({
    msg: 'Login Successfully',
    severity: 'success',
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      setOpen(true);
      setTimeout(() => {
        setModal('');
        navigate('/Freshio');
      }, 1000);
    } catch (error) {
      setSnackData({ msg: error.message, severity: 'error' });
      setOpen(true);
    }
    reset();
  };

  const handleSwitch = () => {
    setModal('signUp');
  };

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

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
              {...register('email', {
                required: true,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
            />

            {errors.email && errors.email.type === 'pattern' && (
              <p className="text-danger">email is unvalid ex: aa@gmail.com</p>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password', {
                required: true,
                pattern:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              })}
            />
            {errors.password && errors.password.type === 'pattern' && (
              <p className="text-danger">
                Should have Uppercase and Numbers and special character mon
                length is 8
              </p>
            )}
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
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open}
          onClose={() => setOpen(false)}
          autoHideDuration={3000}
        >
          <Alert severity={snackData.severity} sx={{ width: '100%' }}>
            {snackData.msg}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}
