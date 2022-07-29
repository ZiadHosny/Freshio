import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../../assets/logo.svg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './ContainerModal.css';
import { UserAuth } from '../../context/AuthContext';
import { ModalContext } from '../../context/ModalContext';

import Copyright from '../../shared/Copyright';

export default function SignUp({ onClick }) {
  const { signUp } = UserAuth();
  const { setModal } = ModalContext();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setError('');
    try {
      await signUp(data.email, data.password);
      setModal('');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSwitch = () => {
    setModal('login');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <Container
      onClick={onClick}
      className="ContainerModal"
      component="main"
      maxWidth="xs"
      sx={{ width: '80%' }}
    >
      <Box
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: { xs: '10px', md: '4px' },
        }}
      >
        <img src={logo} alt="/" className="w-25  m-auto" />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                {...register('firstName', {
                  required: true,
                  pattern: /^[^-\s\d][a-zA-Z\s-]+$/,
                })}
              />

              {errors.firstName && errors.firstName.type === 'pattern' && (
                <p className="text-danger">
                  First name is (Shouldn't have Space or Number)
                </p>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                {...register('lastName', {
                  required: true,
                  pattern: /^[^-\s\d][a-zA-Z\s-]+$/,
                })}
              />

              {errors.lastName && errors.lastName.type === 'pattern' && (
                <p className="text-danger">
                  Last name is (Shouldn't have Space or Number)
                </p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="signEmail"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register('email', {
                  required: true,
                  pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
              />

              {errors.email && errors.email.type === 'pattern' && (
                <p className="text-danger">email is unvalid ex: aa@gmail.com</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="signPassword"
                autoComplete="new-password"
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
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirm password"
                label="confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                {...register('confirmPassword', {
                  required: true,
                  validate: (val) => {
                    if (watch('password') !== val) {
                      return 'your password do not match';
                    }
                  },
                })}
              />
              {errors.confirmPassword &&
                errors.confirmPassword.type === 'validate' && (
                  <p className="text-danger">Password Not Match</p>
                )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            className="bg-color"
          >
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <p className="text-color">
                Already have an account?
                <Button onClick={handleSwitch}>login</Button>
              </p>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
