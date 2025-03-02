import React from "react";
import { Box } from "@mui/material";
import image1 from "../Assets/Banner.png";
import image2 from "../Assets/Slovo_1.png";
import image3 from "../Assets/Slovo_2.png";
import image4 from "../Assets/Slovo_3.png";
import image5 from "../Assets/Slovo_04.png";
import image6 from "../Assets/Slovo_5.png";
import image7 from "../Assets/Slovo_6.png";
import image8 from "../Assets/Slovo_7.png";
import image9 from "../Assets/Slovo_8.png";
import image10 from "../Assets/Slovo_9.png";
import image11 from "../Assets/Slovo_10.png";
import image12 from "../Assets/Slovo_11.png";
import image13 from "../Assets/Slovo_12.png";
import image14 from "../Assets/Slovo_13.png";
import image15 from "../Assets/Slovo_14.png";
import image16 from "../Assets/Slovo_15.png";
import image17 from "../Assets/Slovo_16.png";
import image18 from "../Assets/Slovo_17.png";
import image19 from "../Assets/Slovo_18.png";
import image20 from "../Assets/Slovo_19.png";
import image21 from "../Assets/Slovo_20.png";
import image22 from "../Assets/Slovo_21.png";
import image23 from "../Assets/Slovo_22.png";
import image24 from "../Assets/Slovo_23.png";
import image25 from "../Assets/Slovo_24.png";
import image26 from "../Assets/Slovo_25.png";
import image27 from "../Assets/Slovo_26.png";
import image28 from "../Assets/Slovo_27.png";
import image29 from "../Assets/Slovo_28.png";
import image30 from "../Assets/Slovo_29.png";
import image31 from "../Assets/Slovo_30.png";
import image32 from "../Assets/Slovo_31.png";

const imageData = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
    image16, image17, image18, image19, image20, 
    image21, image22, image23, image24, image25,
    image26, image27, image28, image29, image30, image31, image32,
  ];
  
  function ProjectSlovo() {
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
              alt={`Project Slovo ${index + 1}`}
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
  
  export default ProjectSlovo;