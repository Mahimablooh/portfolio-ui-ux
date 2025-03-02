import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom"; 
import mainImage from "../Assets/intro.png"; 
import image1 from "../Assets/AdminPortal_1.png";
import image2 from "../Assets/Snouters_2.png";
import image3 from "../Assets/HabotMain_3.png";
import image4 from "../Assets/Slovo_4.png";
import image5 from "../Assets/TreasureHunt_5.png";
import image6 from "../Assets/Twitch_6.png";

const imagesData = [
  { src: image1, width: 661, height: 526, link: "/HabotAdminPortal" },
  { src: image2, width: 454, height: 526, link: "/snouters" },
  { src: image3, width: 454, height: 526 },
  { src: image4, width: 661, height: 526, link: "/slovo" },
  { src: image5, width: 661, height: 526 },
  { src: image6, width: 454, height: 526, link: "/visionos" },
];

function MainContent() {
  return (
    <Box
      sx={{
        pl: "134px",
        pr: "134px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: "100px",
      }}
    >
      {/* Main Image Section */}
      <Box sx={{ width: "100%", maxWidth: "1200px", mb: "40px" }}>
        <Box component="img" src={mainImage} alt="Main Image" sx={{ width: "100%", height: "auto" }} />
      </Box>

      {/* Image Grid */}
      <Box sx={{ mt: "40px", display: "flex", flexDirection: "column", gap: "40px", width: "100%" }}>
        {/* Row 1 */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", width: "100%" }}>
          <ImageCard data={imagesData[0]} />
          <ImageCard data={imagesData[1]} />
        </Box>

        {/* Row 2 (Centered properly) */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", width: "100%" }}>
          <ImageCard data={imagesData[2]} />
          <ImageCard data={imagesData[3]} />
        </Box>

        {/* Row 3 */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", width: "100%" }}>
          <ImageCard data={imagesData[4]} />
          <ImageCard data={imagesData[5]} />
        </Box>
      </Box>
    </Box>
  );
}

const ImageCard = ({ data }) => (
  <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
    {data.link ? (
      <Link to={data.link}>
        <Box
          component="img"
          src={data.src}
          alt="Image"
          sx={{
            width: data.width,
            height: data.height,
            cursor: "pointer", // Add cursor pointer to indicate it's clickable
          }}
        />
      </Link>
    ) : (
      <Box
        component="img"
        src={data.src}
        alt="Image"
        sx={{
          width: data.width,
          height: data.height,
        }}
      />
    )}
  </Box>
);

export default MainContent;
