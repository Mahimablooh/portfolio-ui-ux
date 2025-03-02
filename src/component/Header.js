import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logo from "../Assets/logo.png";
import myWorkIcon from "../Assets/Mywork.png";
import blogIcon from "../Assets/Blog.png";
import aboutIcon from "../Assets/About.png";
import resumeIcon from "../Assets/Resume.png";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", padding: "0px 0px" }}>
        <Box component="img" src={logo} alt="Logo" sx={{ width: "62px", height: "62px" }} />
        <Box sx={{ display: "flex", gap: "24px" }}>
          <Button href="/mywork" sx={{ minWidth: "auto", padding: 0 }}>
            <Box component="img" src={myWorkIcon} alt="My Work" sx={{ width: "120px", height: "52px" }} />
          </Button>
          <Button href="https://medium.com/@mahima.30420" target="_blank" rel="noopener noreferrer" sx={{ minWidth: "auto", padding: 0 }}>
            <Box component="img" src={blogIcon} alt="Blog" sx={{ width: "120px", height: "52px" }} />
          </Button>
          <Button href="/about" sx={{ minWidth: "auto", padding: 0 }}>
            <Box component="img" src={aboutIcon} alt="About" sx={{ width: "120px", height: "52px" }} />
          </Button>
          <Button href="/resume" sx={{ minWidth: "auto", padding: 0 }}>
            <Box component="img" src={resumeIcon} alt="Resume" sx={{ width: "120px", height: "52px" }} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;