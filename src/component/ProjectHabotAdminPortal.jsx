import React from "react";
import { Box } from "@mui/material";
import image1 from "../Assets/HAP_1.png";
import image2 from "../Assets/HAP_2.png";
import image3 from "../Assets/HAP_3.png";
import image4 from "../Assets/HAP_4.png";
import image5 from "../Assets/HAP_5.png";
import image6 from "../Assets/HAP_6.png";
import image7 from "../Assets/HAP_7.png";
import image8 from "../Assets/HAP_8.png";
import image9 from "../Assets/HAP_9.png";
import image10 from "../Assets/HAP_10.png";
import image11 from "../Assets/HAP_11.png";
import image12 from "../Assets/HAP_12.png";
import image13 from "../Assets/HAP_13.png";
import image14 from "../Assets/HAP_14.png";
import image15 from "../Assets/HAP_15.png";

const imageData = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
  ];
  
  function HabotAdminPortal() {
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
              alt={`Project Snouters ${index + 1}`}
              sx={{
                width: "1240px",
                height: "auto",
              }}
            />
          ))}
        </Box>
      </Box>
    );
  }
  
  export default HabotAdminPortal;
  