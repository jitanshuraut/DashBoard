import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color="#0177FB"
        fontWeight="bold"
        sx={{ mb: "5px",
      
      fontFamily:"'Montserrat', sans-serif"}}
      >
        {title}
      </Typography>
      <Typography variant="h5" fontFamily="'Montserrat', sans-serif" color="#0177FB">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
