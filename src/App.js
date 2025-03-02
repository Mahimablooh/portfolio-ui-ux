import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MainContent from "./component/MainContent";
import About from "./component/About";
import Snouters from "./component/ProjectSnouters";
import VisionOS from "./component/ProjectVisionOSTwitch";
import Mywork from "./component/MainContent";
import Slovo from "./component/ProjectSlovo";
import ProtectedHabotAdminPortal from "./component/ProtectedProjectHabotAdminPortal"; // Use protected version

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Header />
        <main style={{ margin: "54px", flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/visionos" element={<VisionOS />} />
            <Route path="/HabotAdminPortal" element={<ProtectedHabotAdminPortal />} /> {/* Now password protected */}
            <Route path="/snouters" element={<Snouters />} />
            <Route path="/MyWork" element={<Mywork />} />
            <Route path="/slovo" element={<Slovo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

