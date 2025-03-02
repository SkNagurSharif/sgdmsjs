import React from 'react';
import { Typography, Container } from '@mui/material';

const Sustainable: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Sustainable Product Offerings
      </Typography>
      <Typography variant="body1">
        This page provides information about sustainable product offerings.
      </Typography>
    </Container>
  );
};

export default Sustainable;
