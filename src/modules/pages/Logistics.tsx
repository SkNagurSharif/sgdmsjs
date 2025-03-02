import React from 'react';
import { Typography, Container } from '@mui/material';

const Logistics: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Logistics Management
      </Typography>
      <Typography variant="body1">
        This page provides information about logistics management.
      </Typography>
    </Container>
  );
};

export default Logistics;
