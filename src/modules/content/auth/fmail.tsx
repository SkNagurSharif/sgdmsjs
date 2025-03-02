import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests

const ForgotMail: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State for message

  const sendForgotMailRequest = async (email: string) => {
    // Function to send the forgot mail request to the backend
    const response = await axios.post('/api/forgot-mail', { email });
    return response.data; // Assuming the response contains a message
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendForgotMailRequest(email);
      setMessage("A reset link has been sent to your email."); // Success message
    } catch (error) {
      setMessage("Failed to send reset link. Please try again."); // Error message
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">Forgot Mail</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send Mail
          </Button>
        </form>
        {message && <Typography sx={{ mt: 2 }}>{message}</Typography>} {/* Display message */}
      </Box>
    </Container>
  );
};

export default ForgotMail;