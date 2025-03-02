import React from "react";
import { Box, IconButton } from "@mui/material";
import footerImage from "../Assets/footertext.png"; // Replace with your new image
import linkedinLogo from "../Assets/Linkedin.png";
import instagramLogo from "../Assets/Instagram.png";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 100px",
        height: "60px",
        backgroundColor: "transparent",
      }}
    >
      <Box component="img" src={footerImage} alt="Footer Image" sx={{ width: "539px", height: "29px" }} />

      <Box sx={{ display: "flex", gap: "12px" }}>
        <IconButton component="a" href="https://www.linkedin.com/in/mahimablooh/" target="_blank" rel="noopener noreferrer">
          <Box component="img" src={linkedinLogo} alt="LinkedIn" sx={{ width: "24px", height: "24px" }} />
        </IconButton>
        <IconButton component="a" href="https://www.instagram.com/bloohstudio/" target="_blank" rel="noopener noreferrer">
          <Box component="img" src={instagramLogo} alt="Instagram" sx={{ width: "24px", height: "24px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;