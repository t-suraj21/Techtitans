import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const NavBar = ({ onRegisterClick }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Handle Profile Menu
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Handle Drawer
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Left - Logo */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: "block", md: "none" } }} // Hamburger menu for small screens
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                            <List>
                                <ListItem button onClick={() => navigate("/")}>
                                    <ListItemText primary="Home" />
                                </ListItem>
                                <ListItem button onClick={() => navigate("/technews")}>
                                    <ListItemText primary="Tech News" />
                                </ListItem>
                                <ListItem button onClick={() => navigate("/internship")}>
                                    <ListItemText primary="Internship" />
                                </ListItem>
                                <ListItem button onClick={onRegisterClick}>
                                    <ListItemText primary="Register" />
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                    <Avatar
                        src="https://via.placeholder.com/150" // Replace with your logo URL
                        alt="Campus Buzz Logo"
                        sx={{ marginRight: 1, display: { xs: "none", md: "block" } }}
                    />
                    <Typography variant="h6" component="div">
                        Campus Buzz
                    </Typography>
                </Box>

                {/* Center - Links for larger screens */}
                {/* <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                    <Button color="inherit" onClick={() => navigate("/")}>
                        Home
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/technews")}>
                        Tech News
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/internship")}>
                        Internship
                    </Button>
                </Box> */}

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
                        <MenuItem onClick={() => navigate("/profile")}>
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
                            display: { xs: "none", md: "block" },
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
