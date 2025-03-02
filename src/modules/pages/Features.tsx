import React, { useState } from 'react';
import { Typography, Container, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Features of SGDMSJS
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button variant="contained" onClick={handleClick}>
          View Features
        </Button>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <MenuItem component={Link} to="/aidriven" onClick={handleClose} sx={{ justifyContent: 'center' }}>
          AI-driven ecommerce solutions
        </MenuItem>
        <MenuItem component={Link} to="/financial" onClick={handleClose} sx={{ justifyContent: 'center' }}>
          Financial banking integration
        </MenuItem>
        <MenuItem component={Link} to="/logistics" onClick={handleClose} sx={{ justifyContent: 'center' }}>
          Logistics management
        </MenuItem>
        <MenuItem component={Link} to="/sustainable" onClick={handleClose} sx={{ justifyContent: 'center' }}>
          Sustainable product offerings
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Features;