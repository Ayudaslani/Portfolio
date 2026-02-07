import React from "react";
import { motion } from "framer-motion";

// HEADER KE JESA LOGO
const FooterLogo = () => (
  <motion.div
    whileHover={{ rotate: [0, -10, 10, 0] }}
    style={{
      background: "linear-gradient(135deg, #00eaff 0%, #0077ff 100%)",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      position: "relative",
      borderRadius: "8px"
    }}
  >
    <span style={{ color: "#000", fontWeight: "900", fontSize: "1.3rem", fontFamily: "monospace" }}>
      A
    </span>
    <div style={{ position: "absolute", bottom: "4px", right: "4px", width: "5px", height: "5px", background: "#fff", borderRadius: "50%" }} />
  </motion.div>
);

const Footer = () => {
  return (
    <footer style={footerWrapper} className="footer-wrapper">
      <style>
        {`
          @media (max-width: 768px) {
            .footer-wrapper { padding: 50px 20px 30px 20px !important; }
            .main-grid { 
              grid-template-columns: 1fr !important; 
              gap: 40px !important; 
            }
            .links-grid { grid-template-columns: 1fr 1fr !important; }
            .footer-flex { flex-direction: column !important; gap: 15px !important; text-align: center; }
          }

          .f-link:hover {
            color: #00eaff !important;
            transform: translateX(3px);
          }
        `}
      </style>

      <div style={container}>
        
        <div style={mainGrid} className="main-grid">
          {/* LOGO & NAME SIDE BY SIDE (Exactly like Header) */}
          <div style={brandSection}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <FooterLogo />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#fff", fontWeight: "700", fontSize: "1rem", letterSpacing: "1px" }}>
                  AYUSHI
                </span>
                <span style={{ color: "#00eaff", fontSize: "0.6rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                  MERNSTACK Developer
                </span>
              </div>
            </div>
            <p style={description}>
              Modern web solutions built with precision and passion.
            </p>
          </div>

          {/* LINKS SECTION */}
          <div style={linksGrid} className="links-grid">
            <div style={navGroup}>
              <span style={label}>NAVIGATION</span>
              <a href="#home" style={fLink} className="f-link">Home</a>
              <a href="#projects" style={fLink} className="f-link">Projects</a>
              <a href="#about" style={fLink} className="f-link">About</a>
            </div>

            <div style={navGroup}>
              <span style={label}>SOCIALS</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={fLink} className="f-link">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={fLink} className="f-link">GitHub</a>
              <a href="mailto:your@email.com" style={fLink} className="f-link">Email</a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div style={bottomBar}>
          <div style={line}></div>
          <div style={footerFlex} className="footer-flex">
            <p style={copyright}>© 2026 — ALL RIGHTS RESERVED</p>
            <p style={location}>BASED IN GUJARAT, INDIA</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

// --- Styles ---

const footerWrapper = {
  backgroundColor: "#0a0a0a",
  padding: "70px 10% 40px 10%",
  display: "flex",
  justifyContent: "center",
  borderTop: "1px solid #111",
};

const container = { width: "100%", maxWidth: "1200px" };

const mainGrid = {
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: "60px",
  marginBottom: "60px",
};

const brandSection = { display: "flex", flexDirection: "column", gap: "20px" };

const description = {
  fontSize: "14px",
  color: "#555",
  maxWidth: "300px",
  lineHeight: "1.6",
  margin: 0
};

const linksGrid = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" };

const navGroup = { display: "flex", flexDirection: "column", gap: "12px" };

const label = {
  fontSize: "11px",
  color: "#00eaff",
  fontWeight: "800",
  letterSpacing: "2px",
  marginBottom: "8px",
};

const fLink = {
  color: "#888",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  transition: "0.3s ease",
  display: "inline-block"
};

const bottomBar = { width: "100%" };

const line = { height: "1px", width: "100%", background: "#1a1a1a", marginBottom: "30px" };

const footerFlex = { display: "flex", justifyContent: "space-between", alignItems: "center" };

const copyright = { fontSize: "11px", color: "#444", letterSpacing: "1px" };

const location = { fontSize: "11px", color: "#444", letterSpacing: "1px" };

export default Footer;