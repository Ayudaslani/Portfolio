import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section style={sectionStyle} id='home' className="hero-section">
      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 968px) {
            .hero-section {
              height: auto !important;
              min-height: 100vh !important;
              padding: 120px 20px 60px 20px !important;
            }
            .hero-grid {
              grid-template-columns: 1fr !important; /* Single column for mobile */
              text-align: center !important;
            }
            .hero-content {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .hero-title {
              font-size: 42px !important;
            }
            .hero-btns {
              justify-content: center !important;
            }

            /* HIDE ORBIT ON MOBILE ONLY (Below 968px) */
            .hero-orbit-container {
              display: none !important;
            }
          }

          /* Tablet/Laptop check: Show orbit again above 968px */
          @media (min-width: 969px) {
            .hero-orbit-container {
              display: flex !important;
            }
          }
          @media (max-width: 968px) {
          .hero-orbit-container {
            display: none !important;
          }
        }
        `}
      </style>

      {/* Background Grid Pattern */}
      <div style={gridBackground} />

      {/* Radial Glow */}
      <div style={radialGlow} />

      <div style={container} className="hero-grid">
        {/* Left Side: Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 style={titleStyle} className="hero-title">
            AYUSHI <br />
            <span style={strokeText}>DASLANI</span>
          </h1>

          <p style={descriptionStyle}>
            Building high-performance web applications using the <b>MERN</b> stack. I turn complex problems into elegant, scalable code.
          </p>

          <div style={btnContainer} className="hero-btns">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              style={primaryBtn}
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              href="/resume/AYUSHI-MERN-STACK.pdf"
              style={secondaryBtn}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Visual Element (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={orbitWrapper}
          className="hero-orbit-container"
        >
          {/* Central Logo */}
          <div style={centralCircle}>
            <span style={mernText}>MERN</span>
          </div>

          {/* Orbiting Elements */}
          <OrbitingTag label="MongoDB" radius={110} duration={20} delay={0} />
          <OrbitingTag label="Express" radius={150} duration={25} delay={-5} />
          <OrbitingTag label="React" radius={190} duration={18} delay={-10} />
          <OrbitingTag label="Node.js" radius={230} duration={30} delay={-15} />

          {/* Visual Orbit Lines */}
          {[110, 150, 190, 230].map((r, i) => (
            <div key={i} style={orbitLine(r)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Sub-component ---
const OrbitingTag = ({ label, radius, duration, delay }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
      style={{
        position: "absolute",
        width: radius * 2,
        height: radius * 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        zIndex: 1
      }}
    >
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        whileHover={{ scale: 1.2, borderColor: "#fff" }}
        style={tagStyle}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

// --- Styles --- (Same as before)

const sectionStyle = {
  minHeight: "100vh",
  backgroundColor: "#080808",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 10%",
  fontFamily: "'Inter', sans-serif",
  overflow: "hidden",
  position: "relative"
};

const gridBackground = {
  position: "absolute",
  inset: 0,
  backgroundImage: `linear-gradient(to right, #121212 1px, transparent 1px), linear-gradient(to bottom, #121212 1px, transparent 1px)`,
  backgroundSize: "60px 60px",
  zIndex: 0
};

const radialGlow = {
  position: "absolute",
  top: "50%",
  right: "10%",
  width: "400px",
  height: "400px",
  background: "radial-gradient(circle, rgba(0, 234, 255, 0.08) 0%, transparent 70%)",
  zIndex: 0
};

const container = {
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: "40px",
  zIndex: 1,
  width: "100%",
  maxWidth: "1200px"
};

const titleStyle = {
  fontSize: "clamp(48px, 6vw, 72px)",
  fontWeight: "900",
  color: "#fff",
  lineHeight: "1",
  margin: 0
};

const strokeText = {
  color: "transparent",
  WebkitTextStroke: "1px #555"
};

const descriptionStyle = {
  color: "#888",
  fontSize: "18px",
  marginTop: "25px",
  maxWidth: "450px",
  lineHeight: "1.6"
};

const btnContainer = {
  display: "flex",
  gap: "20px",
  marginTop: "40px",
  flexWrap: "wrap"
};

const primaryBtn = {
  background: "#fff",
  color: "#000",
  padding: "14px 28px",
  borderRadius: "4px",
  fontWeight: "bold",
  textDecoration: "none"
};

const secondaryBtn = {
  border: "1px solid #333",
  color: "#fff",
  padding: "14px 28px",
  borderRadius: "4px",
  fontWeight: "bold",
  textDecoration: "none"
};

const orbitWrapper = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "400px"
};

const centralCircle = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  border: "1px solid rgba(0, 234, 255, 0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 0 40px rgba(0, 234, 255, 0.1) inset",
  zIndex: 2,
  backgroundColor: "#080808"
};

const mernText = {
  fontSize: "24px",
  color: "#fff",
  fontWeight: "900",
  letterSpacing: "2px"
};

const tagStyle = {
  background: "rgba(17, 17, 17, 0.9)",
  backdropFilter: "blur(8px)",
  border: "1px solid #00eaff",
  color: "#00eaff",
  padding: "6px 14px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600",
  cursor: "default",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  marginTop: "-15px"
};

const orbitLine = (r) => ({
  position: "absolute",
  width: r * 2,
  height: r * 2,
  border: "1px solid rgba(255,255,255,0.03)",
  borderRadius: "50%",
  zIndex: 0
});

export default Hero;