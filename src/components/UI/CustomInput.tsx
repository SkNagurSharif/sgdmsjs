import React from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

const CustomInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required={required}
    />
  );
};

export default CustomInput;