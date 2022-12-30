import React, { useState } from "react";
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    AppBar,
    Button,
    Box,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme,
} from "@mui/material";

function Navbar({ user, isSidebarOpen, setIsSidebarOpen }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return (
        <>
            <AppBar
                sx={{
                    position: "static",
                    background: "none",
                    boxShadow: "none",


                }}
            >
                <Toolbar
                    sx={{ justifyContent: "space-between" }}
                >
                    <FlexBetween>
                        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <MenuIcon sx={{
                                color: "white"
                            }} />
                        </IconButton>
                        <FlexBetween
                            backgroundColor="#050C23"
                            borderRadius="9px"
                            gap="3rem"
                            p="0.1rem 1.5rem"
                        >
                            <InputBase placeholder="Search..." sx={{
                                color: "white"
                            }} />
                            <IconButton >
                                <Search sx={{
                                    color: "white"
                                }} />
                            </IconButton>
                        </FlexBetween>
                    </FlexBetween>


                    <FlexBetween gap="1.5rem">
                        <IconButton onClick={() => { console.log("theme") }}>

                        </IconButton>
                        <IconButton>
                            <SettingsOutlined sx={{ fontSize: "25px" }} />
                        </IconButton>

                        <FlexBetween>
                            <Button
                                onClick={handleClick}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    textTransform: "none",
                                    gap: "1rem",
                                }}
                            >
                                <Box
                                    component="img"
                                    alt="profile"
                                    src="logo192.png"
                                    height="32px"
                                    width="32px"
                                    borderRadius="50%"
                                    sx={{ objectFit: "cover" }}
                                />
                                <Box textAlign="left">
                                    <Typography
                                        fontWeight="bold"
                                        fontFamily="'Montserrat', sans-serif"

                                        fontSize="0.85rem"
                                        sx={{ color: "white" }}
                                    >
                                        {user.name}
                                    </Typography>
                                    <Typography
                                        fontSize="0.75rem"
                                        fontFamily="'Montserrat', sans-serif"
                                        sx={{ color: "white" }}
                                    >
                                        {user.occupation}
                                    </Typography>
                                </Box>
                                <ArrowDropDownOutlined
                                    sx={{ color: "white", fontSize: "25px" }}
                                />
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={isOpen}
                                onClose={handleClose}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            >
                                <MenuItem onClick={() => { navigate("/") }} >Log Out</MenuItem>
                            </Menu>
                        </FlexBetween>
                    </FlexBetween>

                </Toolbar>



            </AppBar>
        </>
    )
}

export default Navbar