import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CustomButton from "../components/UI/CustomButton";
// import { useAuth } from "../hooks/useAuth"; // Ensure this path is correct or update it to the correct path
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  // const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/account");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'green' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          {location.pathname === '/' ? 'Home' : location.pathname === '/account' ? 'Sign Up' : location.pathname === '/signin' ? 'Sign In' : location.pathname === '/forgot-mail' ? 'Forgot Mail' : location.pathname === '/fpass' ? 'Forgot Password' : 'SGDMSJS'}
        </Typography>
        <CustomButton label="Home" variant="text" color="inherit" onclick={() => navigate('/')} />
        <CustomButton label="Features" variant="text" color="inherit" onclick={() => navigate('/features')} />
        <CustomButton label="About" variant="text" color="inherit" onclick={() => navigate('/about')} />
        <CustomButton label="Contact" variant="text" color="inherit" onclick={() => navigate('/contact')} />

        <CustomButton label="Sign Up" variant="text" color="primary" onclick={handleSignUp} />
        <CustomButton label="Sign In" variant="text" color="secondary" onclick={handleSignIn} />

        {/* {isAuthenticated ? (
          <CustomButton label="Logout" variant="text" color="secondary" onclick={logout} />
        ) : (
          <>
            <CustomButton label="Sign Up" variant="text" color="primary" onclick={handleSignUp} />
            <CustomButton label="Sign In" variant="text" color="secondary" onclick={handleSignIn} />
          </>
        )} */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
