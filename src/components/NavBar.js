import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = ({ onRegisterClick }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Handle Profile Menu
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "#2d3436" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Left - Logo */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                        src="https://via.placeholder.com/150" // Replace with your logo URL
                        alt="Campus Buzz Logo"
                        sx={{ marginRight: 1 }}
                    />
                    <Typography variant="h6" component="div">
                        Campus Buzz
                    </Typography>
                </Box>

                {/* Center - Links */}
                <Box sx={{ display: "flex", gap: 3 }}>
                    <Button color="inherit" onClick={() => navigate("/")}>
                        Home
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/technews")}>
                        Tech News
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/internship")}>
                        Internship
                    </Button>
                </Box>

                {/* Right - Profile and Register */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {/* Profile */}
                    <Avatar
                        onClick={handleMenuClick}
                        sx={{ cursor: "pointer", bgcolor: "#0984e3" }}
                        alt="User Profile"
                    >
                        U
                    </Avatar>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={() => alert("Navigate to Profile")}>
                            View Profile
                        </MenuItem>
                        <MenuItem onClick={() => alert("Logout")}>Logout</MenuItem>
                    </Menu>

                    {/* Register Button */}
                    <Button
                        variant="outlined"
                        color="inherit"
                        sx={{
                            color: "white",
                            borderColor: "white",
                            "&:hover": { bgcolor: "white", color: "#2d3436" },
                        }}
                        onClick={onRegisterClick} // Call the handler
                    >
                        Register
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
