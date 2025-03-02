// filepath: /d:/App/Subhana/sgdmsjs/sgdmsjs-client/src/components/PassInput.tsx
import React from 'react';
import TextInput from './textInput';

interface PasswordInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, name, value, onChange }) => {
  return (
    <TextInput
      label={label}
      name={name}
      type="password"
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default PasswordInput;