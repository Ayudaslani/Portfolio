import React from "react";

const Footer = () => {
  return (
    <footer style={footerWrapper} className="footer-wrapper">
      {/* RESPONSIVE CSS 
          This block ensures the layout stacks on mobile and 
          overrides the inline styles using !important.
      */}
      <style>
        {`
          @media (max-width: 768px) {
            .footer-wrapper {
              padding: 40px 20px 30px 20px !important; /* Reduced top space on mobile */
            }
            .main-grid { 
              grid-template-columns: 1fr !important; 
              gap: 40px !important; 
              margin-bottom: 60px !important;
              text-align: center;
            }
            .links-grid { 
              grid-template-columns: 1fr 1fr !important; 
              gap: 20px !important; 
              text-align: left;
            }
            .footer-flex { 
              flex-direction: column !important; 
              gap: 15px !important; 
              align-items: center !important; 
              text-align: center;
            }
            .brand-col {
              align-items: center !important;
            }
          }

          /* Hover effect for links */
          .f-link:hover {
            color: #00eaff !important;
            transform: translateX(5px);
          }
        `}
      </style>

      <div style={container}>
        
        {/* Top Section */}
        <div style={mainGrid} className="main-grid">
          <div style={brandCol} className="brand-col">
            <h2 style={bigLogo}>AYUSHI DASLANI</h2>
            <p style={roleText}>FULL-STACK MERN DEVELOPER</p>
          </div>

          <div style={linksGrid} className="links-grid">
            <div style={navGroup}>
              <span style={label}>EXPLORE</span>
              <a href="#home" style={fLink} className="f-link">Home</a>
              <a href="#about" style={fLink} className="f-link">About</a>
              <a href="#projects" style={fLink} className="f-link">Projects</a>
            </div>

            <div style={navGroup}>
              <span style={label}>CONNECT</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={fLink} className="f-link">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={fLink} className="f-link">GitHub</a>
              <a href="mailto:your@email.com" style={fLink} className="f-link">Email</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
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
  backgroundColor: "#080808",
  padding: "60px 10% 40px 10%", // Reduced desktop top space (was 100px)
  display: "flex",
  justifyContent: "center",
  borderTop: "1px solid #111",
};

const container = {
  width: "100%",
  maxWidth: "1200px",
};

const mainGrid = {
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr",
  gap: "60px",
  marginBottom: "80px",
};

const brandCol = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const bigLogo = {
  fontSize: "32px",
  fontWeight: "900",
  color: "#fff",
  letterSpacing: "-1px",
  margin: 0,
};

const roleText = {
  fontSize: "12px",
  color: "#444",
  letterSpacing: "3px",
  fontWeight: "600",
};

const linksGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
};

const navGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const label = {
  fontSize: "11px",
  color: "#00eaff",
  fontWeight: "900",
  letterSpacing: "2px",
  marginBottom: "10px",
};

const fLink = {
  color: "#888",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  transition: "0.3s ease",
  display: "inline-block",
};

const bottomBar = {
  width: "100%",
};

const line = {
  height: "1px",
  width: "100%",
  background: "#1a1a1a",
  marginBottom: "30px",
};

const footerFlex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const copyright = {
  fontSize: "11px",
  color: "#333",
  letterSpacing: "1px",
};

const location = {
  fontSize: "11px",
  color: "#333",
  letterSpacing: "1px",
};

export default Footer;