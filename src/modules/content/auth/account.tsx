// src/CreateAccount.tsx

import React, { useState } from 'react';
import { Typography, Container, Box } from '@mui/material';
import PasswordInput from '../../../components/passInput';
import SubmitButton from '../../../components/submitButton';
import TextInput from '../../../components/textInput';

const CreateAccount: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [bgColor, setBgColor] = useState<string>('white');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);

    // Change background color to different shades of blue
    const shadesOfBlue = ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3'];
    const randomColor = shadesOfBlue[Math.floor(Math.random() * shadesOfBlue.length)];
    setBgColor(randomColor);
  };

  return (
    <div className="create-account-container" style={{ backgroundColor: bgColor }}>
      <div className="create-account-wrapper" style={{ backgroundColor: bgColor }}>
      <div className="create-account-content" style={{ backgroundColor: bgColor }}>
        <Container maxWidth="sm">
        <Box className="create-account-box">
          <Typography variant="h4" align="center" gutterBottom>
          Create Account
          </Typography>
          <form onSubmit={handleSubmit}>
          <TextInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <SubmitButton text="Create Account" />
          </form>
        </Box>
        </Container>
      </div>
      </div>
    </div>
  );
};

export default CreateAccount;
