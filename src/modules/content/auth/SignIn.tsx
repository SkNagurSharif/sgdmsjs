import React from 'react';
import { useState } from "react";
import { Button, TextField, Typography, Container } from '@mui/material';

const SignIn = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Sign In
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    type="text" 
                    label="Email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    fullWidth 
                    margin="normal" 
                />
                <TextField 
                    type="password" 
                    label="Password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                    fullWidth 
                    margin="normal" 
                />
                <Button type="submit" variant="contained" color="primary">Sign In</Button>
            </form>
        </Container>
    );
};

export default SignIn;
