import React from 'react';
import { Typography, Container } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        For inquiries, please reach out to us at:
        <br />
        Email: support@sgdmsjs.com
        <br />
        Phone: +1 (555) 123-4567
      </Typography>
    </Container>
  );
};

export default Contact;
