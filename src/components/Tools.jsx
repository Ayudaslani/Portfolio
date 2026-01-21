import React from "react";
import { motion } from "framer-motion";

const Tools = () => {
  // Tools specific to your MERN workflow
  const tools = [
    "VS Code", "Postman", "Git", "GitHub", "Vercel", 
   "Firebase", "Chrome DevTools", 
    "NPM", "Compass", "Canva"
  ];

  // We double the array to create a seamless loop
  const duplicatedTools = [...tools, ...tools];

  return (
    <section id="tools" style={sectionStyle} className="tools-section">
      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .tools-section {
              padding: 40px 20px 60px 20px !important;
            }
            .tools-heading {
              font-size: 20px !important;
            }
            .tool-badge {
              padding: 8px 18px !important;
              font-size: 13px !important;
            }
            .fade-overlay {
              width: 50px !important; /* Smaller fades for mobile */
            }
          }
        `}
      </style>

      <div style={container}>
        {/* Header Row */}
        <div style={headerRow}>
          <h2 style={heading} className="tools-heading">
            <span style={labelNumber}>04.</span> WORKFLOW TOOLS
          </h2>
          <div style={horizontalLine}></div>
        </div>

        {/* Marquee Wrapper */}
        <div style={marqueeWrapper}>
          <motion.div 
            style={marqueeContent}
            animate={{ x: [0, -1000] }} // Reduced distance for mobile smoothness
            transition={{ 
              repeat: Infinity, 
              duration: 20, // Slightly faster duration for shorter distance
              ease: "linear" 
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <div key={index} style={toolBadge} className="tool-badge">
                <span style={dot}></span>
                {tool}
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Overlays */}
          <div style={leftFade} className="fade-overlay"></div>
          <div style={rightFade} className="fade-overlay"></div>
        </div>

        {/* Simple Text Detail */}
        <p style={subText}>
          The technologies and platforms I use to <b>test, deploy, and optimize</b> my applications.
        </p>
      </div>
    </section>
  );
};

// --- Styles ---

const sectionStyle = {
  padding: "60px 10% 100px 10%",
  backgroundColor: "#080808",
  display: "flex",
  justifyContent: "center",
  fontFamily: "'Inter', sans-serif",
  overflow: "hidden",
};

const container = {
  width: "100%",
  maxWidth: "1200px",
};

const headerRow = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "40px",
};

const labelNumber = {
  color: "#00eaff",
  fontFamily: "monospace",
  fontSize: "18px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "800",
  color: "#fff",
};

const horizontalLine = {
  height: "1px",
  background: "#1a1a1a",
  flex: 1,
};

const marqueeWrapper = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  padding: "20px 0", // Reduced padding slightly
};

const marqueeContent = {
  display: "flex",
  gap: "20px", // Reduced gap for tighter mobile fit
  width: "max-content",
};

const toolBadge = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "12px 25px",
  background: "#0d0d0d",
  border: "1px solid #1a1a1a",
  borderRadius: "50px",
  color: "#888", // Slightly brighter for better visibility
  fontSize: "15px",
  fontWeight: "500",
  whiteSpace: "nowrap",
};

const dot = {
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  background: "#00eaff",
  boxShadow: "0 0 10px #00eaff",
};

const subText = {
  textAlign: "center",
  color: "#444",
  fontSize: "14px",
  marginTop: "20px",
  padding: "0 10px", // Prevents text hitting edges on mobile
};

const leftFade = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "150px",
  height: "100%",
  background: "linear-gradient(90deg, #080808, transparent)",
  zIndex: 2,
};

const rightFade = {
  position: "absolute",
  top: 0,
  right: 0,
  width: "150px",
  height: "100%",
  background: "linear-gradient(-90deg, #080808, transparent)",
  zIndex: 2,
};

export default Tools;