import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// LOGO WITH BACKGROUND (Kept exactly as yours)
const UniqueLogo = () => (
  <motion.div
    whileHover={{ rotate: [0, -10, 10, 0] }}
    style={{
      background: "linear-gradient(135deg, #00eaff 0%, #0077ff 100%)",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      position: "relative",
      borderRadius: "10px"
    }}
  >
    <span style={{ color: "#000", fontWeight: "900", fontSize: "1.5rem", fontFamily: "monospace" }}>
      A
    </span>
    <div style={{ position: "absolute", bottom: "5px", right: "5px", width: "6px", height: "6px", background: "#fff", borderRadius: "50%" }} />
  </motion.div>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "15px 30px",
        background: "rgba(15, 15, 15, 0.85)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box"
      }}
    >
      {/* LEFT SIDE (Logo & Name) */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        style={{ display: "flex", alignItems: "center", gap: "15px" }}
      >
        <UniqueLogo />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#fff", fontWeight: "700", fontSize: "1rem", letterSpacing: "1px" }}>
            AYUSHI
          </span>
          <span style={{ color: "#00eaff", fontSize: "0.6rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
            MERNSTACK Developer
          </span>
        </div>
      </motion.div>

      {/* DESKTOP NAV (Hidden on mobile via CSS) */}
      <style>
        {`
          .nav-links { display: flex; gap: 20px; }
          .hamburger { display: none; cursor: pointer; flex-direction: column; gap: 5px; z-index: 1001; }
          .hamburger div { width: 25px; height: 3px; background: #fff; transition: 0.3s; }
          
          @media (max-width: 768px) {
            .nav-links { display: none; }
            .hamburger { display: flex; }
          }
        `}
      </style>

      <nav className="nav-links">
        {navLinks.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            whileHover={{ scale: 1.1, color: "#00eaff" }}
            style={{ color: "#fff", textDecoration: "none", fontSize: "0.85rem", fontWeight: "600" }}
          >
            {link}
          </motion.a>
        ))}
      </nav>

      {/* HAMBURGER ICON */}
      <div className="hamburger" onClick={toggleMenu}>
        <div style={{ transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }} />
        <div style={{ opacity: isOpen ? 0 : 1 }} />
        <div style={{ transform: isOpen ? "rotate(-45deg) translate(5px, -7px)" : "none" }} />
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              background: "rgba(15, 15, 15, 0.95)",
              padding: "20px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              backdropFilter: "blur(15px)",
              borderBottom: "1px solid #333"
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // Close menu on click
                style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem", fontWeight: "600" }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;