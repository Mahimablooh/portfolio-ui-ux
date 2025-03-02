import React from "react";
import { Box } from "@mui/material";
import image1 from "../Assets/intro_about.png";
import image2 from "../Assets/playground.png";


const imageData = [
    image1, image2,
  ];
  
  function About() {
    return (
      <Box sx={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "82px", // Space between images
          }}
        >
          {imageData.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`About ${index + 1}`}
              sx={{
                width: "1440px",
                height: "auto",
              }}
            />
          ))}
        </Box>
      </Box>
    );
  }
  
  export default About;
  