import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import ProjectHabotAdminPortal from "./ProjectHabotAdminPortal"; // Import the actual project component

const ProtectedProjectHabotAdminPortal = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "3qP|56sdp7"; // Change this to your desired password

  const handleSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Try again.");
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      {isAuthenticated ? (
        <ProjectHabotAdminPortal /> // Load the project after authentication
      ) : (
        <Box>
          <Typography variant="h5" gutterBottom>Enter Password to Access</Typography>
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <Button onClick={handleSubmit} variant="contained" sx={{ ml: 2, mt: 2 }}>
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProtectedProjectHabotAdminPortal;
