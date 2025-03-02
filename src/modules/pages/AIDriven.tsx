import React from 'react';
import { Typography, Container } from '@mui/material';

const AIDriven: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        AI-driven Ecommerce Solutions
      </Typography>
      <Typography variant="body1">
        This page provides information about AI-driven ecommerce solutions.
      </Typography>
    </Container>
  );
};

export default AIDriven;
