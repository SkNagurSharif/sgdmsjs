import React from 'react';
import { Typography, Container } from '@mui/material';

const Financial: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Financial Banking Integration
      </Typography>
      <Typography variant="body1">
        This page provides information about financial banking integration.
      </Typography>
    </Container>
  );
};

export default Financial;
