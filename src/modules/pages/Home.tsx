import { AppBar, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'; // Importing the Home icon
import CustomButton from "../../components/UI/CustomButton";
import { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Define anchorEl state

  const handleSignUp = () => {
    navigate("/account");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLElement>) => { // Define handleDropdownClick
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleForgotPassword = () => {
    navigate("/fpass"); // Ensure this navigates to the correct page
    handleClose();
  };

  const handleForgotMail = () => {
    navigate("/forgot-mail"); // Ensure this navigates to the correct page
    handleClose();
  };

  return (
    <div>
      {/* Nav bar */}
      <AppBar position="fixed" sx={{ width: '100%', backgroundColor: 'green' }}>
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ marginRight: 1 }} /> Home
            </Typography>

            <CustomButton 
            label="Home" 
            variant="text" 
            color="inherit" 
            onclick={() => navigate('/')}
            />
          <CustomButton
            label="Features" 
            variant="text" 
            color="inherit" 
            onclick={() => navigate('/features')}
          />
          <CustomButton 
            label="About" 
            variant="text" 
            color="inherit" 
            onclick={() => navigate('/about')}
          />
          <CustomButton 
            label="Contact" 
            variant="text" 
            color="inherit" 
            onclick={() => navigate('/contact')}
          />

          <CustomButton
            label="Services"
            variant="contained"
            color="primary"
            onclick={handleDropdownClick} // Use CustomButton for dropdown
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleForgotPassword}>Forgot Password</MenuItem>
            <MenuItem onClick={handleForgotMail}>Forgot Mail</MenuItem>
          </Menu>

          <CustomButton label="Sign Up" variant="contained" color="primary" onclick={handleSignUp} />
          <CustomButton label="Sign In" variant="contained" color="secondary" onclick={handleSignIn} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Home;
