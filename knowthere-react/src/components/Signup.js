import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const Signup = ({ history }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, {
        email,
        username,
        password,
      });

      localStorage.setItem('token', response.data.token);
      history.push('/');
    } catch (err) {
      setError('Error creating account. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          {error && (
            <Typography variant="subtitle1" color="error">
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default withRouter(Signup);
