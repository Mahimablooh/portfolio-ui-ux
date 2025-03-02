import React from "react";
import { Box } from "@mui/material";
import image1 from "../Assets/1.png";
import image2 from "../Assets/Context_2.png";
import image3 from "../Assets/Problem_3.png";
import image4 from "../Assets/Solution_4.png";
import image5 from "../Assets/Timeline_5.png";
import image6 from "../Assets/OurApproach_6.png";
import image7 from "../Assets/UnderstandingCompetitors_7.png";
import image8 from "../Assets/KT_8.png";
import image9 from "../Assets/UnderstandingUsers_9.png";
import image10 from "../Assets/KT_10.png";
import image11 from "../Assets/Ideating_11.png";
import image12 from "../Assets/Workflow_12.png";
import image13 from "../Assets/InitialDesigns_13.png";
import image14 from "../Assets/DesignSystems_14.png";
import image15 from "../Assets/SelectServices_15.png";
import image16 from "../Assets/Let'sGetStarted_16.png";
import image17 from "../Assets/ServiceDetails_17.png";
import image18 from "../Assets/Pricing_18.png";
import image19 from "../Assets/PetProfile_19.png";
import image20 from "../Assets/Learnings_20.png";

const imageData = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
    image16, image17, image18, image19, image20,
  ];
  
  function ProjectSnouters() {
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
  
  export default ProjectSnouters;
  