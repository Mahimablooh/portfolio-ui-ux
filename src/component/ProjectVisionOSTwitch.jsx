import React from "react";
import { Box } from "@mui/material";
import image1 from "../Assets/thumbnail_1.png";
import image2 from "../Assets/OS_2.png";
import image3 from "../Assets/OS_3.png";
import image4 from "../Assets/OS_4.png";
import image5 from "../Assets/OS_5.png";
import image6 from "../Assets/OS_6.png";
import image7 from "../Assets/OS_7.png";
import image8 from "../Assets/OS_8.png";
import image9 from "../Assets/OS_9.png";
import image10 from "../Assets/OS_10.png";
import image11 from "../Assets/OS_11.png";
import image12 from "../Assets/OS_12.png";

const imageData = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12,
  ];
  
  function ProjectVisionOSTwitch() {
    return (
      <Box sx={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px", // Space between images
          }}
        >
          {imageData.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Project VisionOSTwitch ${index + 1}`}
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
  
  export default ProjectVisionOSTwitch;