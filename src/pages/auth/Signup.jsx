import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../../assets/logo.svg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './signup.css';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp({ isShowSignup, switchSign, close }) {
  const onSubmit = (data) => console.log(data);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },

    watch,
  } = useForm();

  const handleSwitch = () => {
    switchSign();
    reset();
  };
  const closeIt = () => {
    close();
    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`${!isShowSignup ? '' : 'signCont'}`}>
        <Container
          className={`${!isShowSignup ? 'active' : ''} sign`}
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
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
            <img src={logo} alt="/" className="w-25" />
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
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
                      pattern: /^[A-Za-z]+$/,
                    })}
                  />
                  {errors.firstName && errors.firstName.type === 'required' && (
                    <p className="text-danger">first name is required</p>
                  )}
                  {errors.firstName && errors.firstName.type === 'pattern' && (
                    <p className="text-danger">
                      first name is (shouldn't have space or number)
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
                      pattern: /^[A-Za-z]+$/,
                    })}
                  />
                  {errors.lastName && errors.lastName.type === 'required' && (
                    <p className="text-danger">last name is required</p>
                  )}
                  {errors.lastName && errors.lastName.type === 'pattern' && (
                    <p className="text-danger">
                      last name is unvalid (shouldn't have space or number)
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

                  {errors.email && errors.email.type === 'required' && (
                    <p className="text-danger">email is required</p>
                  )}
                  {errors.email && errors.email.type === 'pattern' && (
                    <p className="text-danger">
                      email is unvalid ex: aa@gmail.com
                    </p>
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
                        /^(?=.[A-Za-z])(?=.\d)(?=.[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                    })}
                  />
                  {errors.password && errors.password.type === 'required' && (
                    <p className="text-danger">password is required</p>
                  )}
                  {errors.password && errors.password.type === 'pattern' && (
                    <p className="text-danger">
                      should have upercase and numbers and special character mon
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
                    errors.confirmPassword.type === 'required' && (
                      <p className="text-danger">
                        confirm password is Required
                      </p>
                    )}

                  {errors.confirmPassword &&
                    errors.confirmPassword.type === 'validate' && (
                      <p className="text-danger">Password Not Match</p>
                    )}
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="btn-bg"
              >
                Sign Up
              </Button>

              <button className="close-btn" onClick={closeIt}>
                X
              </button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <RouterLink
                    className="text-color"
                    to="/"
                    onClick={handleSwitch}
                  >
                    Already have an account? Sign in
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

// // import React from 'react';

// // const Signup = () => {
// //   return <div>Signup</div>;
// // };

// // export default Signup;

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useForm } from "react-hook-form"

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

//   const onSubmit = data => console.log(data);

//   const { register, handleSubmit, formState: { errors }, control, watch } = useForm();

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/ })}
//                 />
//                 {
//                   (errors.firstName && errors.firstName.type === "required")
//                   &&
//                   <p className='text-danger'>first name is required</p>
//                 }
//                 {
//                   (errors.firstName && errors.firstName.type === "pattern")
//                   &&
//                   <p className='text-danger'>first name is (shouldn't have space or number)</p>
//                 }
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                   {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/ })}
//                 />
//                 {
//                   (errors.lastName && errors.lastName.type === "required")
//                   &&
//                   <p className='text-danger'>last name is required</p>
//                 }
//                 {
//                   (errors.lastName && errors.lastName.type === "pattern")
//                   &&
//                   <p className='text-danger'>last name is unvalid (shouldn't have space or number)</p>
//                 }
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
//                 />
//                 {
//                   (errors.email && errors.email.type === "required")
//                   &&
//                   <p className='text-danger'>email is required</p>
//                 }
//                 {
//                   (errors.email && errors.email.type === "pattern")
//                   &&
//                   <p className='text-danger'>email is unvalid ex: aa@gmail.com</p>
//                 }
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   {...register('password', { required: true, pattern: /^(?=.[A-Za-z])(?=.\d)(?=.[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ })}

//                 />
//                 {
//                   (errors.password && errors.password.type === "required")
//                   &&
//                   <p className='text-danger'>password is required</p>
//                 }
//                 {
//                   (errors.password && errors.password.type === "pattern")
//                   &&
//                   <p className='text-danger'>should have upercase and numbers and special character mon length is 8</p>
//                 }
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="confirm password"
//                   label="confirm Password"
//                   type="password"
//                   id="confirmPassword"
//                   autoComplete="new-password"
//                   {...register("confirmPassword", {
//                     required: true,
//                     validate: (val) => {

//                       if (watch("password") !== val) {
//                         return "your password do not match";
//                       }
//                     },

//                   })}

//                 />
//                 {errors.confirmPassword && errors.confirmPassword.type === "required" && (

//                   <p className="text-danger">confirm password is Required</p>

//                 )}

//                 {errors.confirmPassword && errors.confirmPassword.type === "validate" && (

//                   <p className="text-danger">Password Not Match</p>

//                 )}
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox name="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
