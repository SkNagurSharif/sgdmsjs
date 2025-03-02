// src/SubmitButton.tsx

import React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      sx={{ mt: 2 }}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;