import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Router from "next/router";
import { loginUser } from '../pages/api/api';

const theme = createTheme();

function SignIn() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tmpData = new FormData(event.currentTarget);
    //getting user inputs
    const username = tmpData.get('username')
    const password = tmpData.get('password')

    const response = await loginUser(username, password);

    //if username and password exist
    if (response.status > 199 && response.status < 401) {
      const { data } = response;
      const accesToken = data.access;

      //decoding auth token to get user info
      const userObject = jwt_decode(accesToken);
      const userName = userObject.username;
      const userId = userObject.user_id;

      //setting cookies in user browser
      document.cookie = `token=${accesToken}`;
      document.cookie = `user=${userName}`;
      document.cookie = `id=${userId}`;
      Router.reload();

    } else {console.log(response)} 
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ borderRadius: '5%', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;