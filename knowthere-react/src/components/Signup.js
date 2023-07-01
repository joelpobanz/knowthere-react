import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const Signup = ({ history }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [suffix, setSuffix] = useState('');
  const [preferredMailingName, setPreferredMailingName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userResponse = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, {
        email,
        username,
        password,
      });

      const userId = userResponse.data.id;
      localStorage.setItem('token', userResponse.data.token);
      const authToken = localStorage.getItem('token');
      const userInfoResponse = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/user_info`, 
        {
          userId,
          firstName,
          lastName,
          suffix,
          preferredMailingName
        },
        {  // wrap the headers inside another set of braces
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );

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
          <TextField
            label="First Name"
            type="text"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Last Name"
            type="text"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Suffix"
            type="text"
            variant="outlined"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Who Do We Address The Mail To?"
            type="text"
            variant="outlined"
            value={preferredMailingName}
            onChange={(e) => setPreferredMailingName(e.target.value)}
            fullWidth
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
