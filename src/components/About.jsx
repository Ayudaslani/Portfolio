import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "MongoDB", desc: "NoSQL & Schema Design" },
    { name: "Express.js", desc: "Server & Middleware" },
    { name: "React.js", desc: "Component-based UI" },
    { name: "Node.js", desc: "JS Runtime" },
  ];

  return (
    <section id="about" style={sectionStyle} className="about-section">
      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 968px) {
            .about-content-wrapper {
              grid-template-columns: 1fr !important;
              gap: 50px !important;
            }
            .about-section {
              padding: 60px 20px !important;
              min-height: auto !important;
            }
            .about-bio-content {
              max-width: 100% !important;
            }
          }
        `}
      </style>

      <div style={contentWrapper} className="about-content-wrapper">
        
        {/* Left Side: Professional Bio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={leftSide}
        >
          <h2 style={aboutHeader}>
            <span style={labelNumber}>01.</span> ABOUT ME
          </h2>
          
          <div style={bioContent} className="about-bio-content">
            <p style={paragraph}>
              I am <span style={{color: "#fff", fontWeight: "600"}}>Ayushi Daslani</span>, 
              a full-stack developer dedicated to the MERN ecosystem. I specialize in building 
              scalable systems where every line of code serves a purpose.
            </p>
            <p style={paragraph}>
              With a focus on <b>performance</b> and <b>clean architecture</b>, I bridge 
              the gap between backend logic and user interactivity.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Technical Blueprint */}
        <div style={rightSide}>
          <div style={stackList}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={skillRow}
              >
                <div style={skillHeader}>
                  <span style={skillNumber}>0{index + 1}</span>
                  <h4 style={skillName}>{skill.name}</h4>
                </div>
                <p style={skillDesc}>{skill.desc}</p>
                <div style={rowLine}></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Styles ---

const sectionStyle = {
  minHeight: "60vh",
  backgroundColor: "#080808",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 10%",
  fontFamily: "'Inter', sans-serif",
};

const contentWrapper = {
  width: "100%",
  maxWidth: "1200px",
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "100px",
  alignItems: "start",
};

const leftSide = {
  display: "flex",
  flexDirection: "column",
};

const labelNumber = {
  color: "#00eaff",
  fontFamily: "monospace",
  marginRight: "10px",
  fontSize: "18px",
};

const aboutHeader = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#fff",
  marginBottom: "25px",
  letterSpacing: "1px",
};

const bioContent = {
  maxWidth: "450px",
};

const paragraph = {
  fontSize: "16px",
  color: "#888",
  lineHeight: "1.6",
  marginBottom: "15px",
};

const rightSide = {
  display: "flex",
  flexDirection: "column",
};

const stackList = {
  display: "flex",
  flexDirection: "column",
};

const skillRow = {
  paddingBottom: "15px",
  marginBottom: "15px",
  position: "relative",
};

const skillHeader = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "4px",
};

const skillNumber = {
  fontSize: "11px",
  fontFamily: "monospace",
  color: "#00eaff",
};

const skillName = {
  fontSize: "17px",
  fontWeight: "700",
  color: "#fff",
  margin: 0,
};

const skillDesc = {
  fontSize: "13px",
  color: "#555",
  marginLeft: "30px",
};

const rowLine = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "1px",
  background: "linear-gradient(90deg, #1a1a1a 0%, transparent 100%)",
};

export default About;