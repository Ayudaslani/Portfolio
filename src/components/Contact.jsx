import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle} className="contact-section">
      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 968px) {
            .contact-section {
              padding: 40px 20px !important; /* Reduced space for mobile */
            }
            .contact-content-grid {
              grid-template-columns: 1fr !important; /* Stack columns */
              gap: 50px !important;
            }
            .contact-input-group {
              grid-template-columns: 1fr !important; /* Inputs stack on mobile */
              gap: 20px !important;
            }
            .contact-description {
              max-width: 100% !important;
            }
            .contact-form {
              gap: 25px !important; /* Tighter gap for mobile form */
            }
          }

          /* Hover effect for form lines */
          input:focus, textarea:focus {
            border-bottom: 1px solid #00eaff !important;
          }
        `}
      </style>

      <div style={container}>
        
        {/* Side-by-Side Content */}
        <div style={contentGrid} className="contact-content-grid">
          
          {/* Left: Heading & Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={leftSide}
          >
            <h2 style={heading}>GET IN TOUCH</h2>
            <p style={description} className="contact-description">
              If you have a project in mind or just want to chat, feel free to reach out. 
              I am always open to discussing new ideas.
            </p>
            
            <div style={infoGroup}>
              <div style={infoItem}>
                <span style={infoLabel}>Email</span>
                <a href="mailto:ayushidaslani@example.com" style={infoValue}>ayushidaslani@example.com</a>
              </div>
              <div style={infoItem}>
                <span style={infoLabel}>Socials</span>
                <div style={socialLinks}>
                  <a href="#" style={socialValue}>LinkedIn</a>
                  <span style={separator}>/</span>
                  <a href="#" style={socialValue}>GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Simple Form */}
          <div style={rightSide}>
            <form style={form} className="contact-form">
              <div style={inputGroup} className="contact-input-group">
                <input type="text" placeholder="NAME" style={inputStyle} />
                <input type="email" placeholder="EMAIL" style={inputStyle} />
              </div>
              <input type="text" placeholder="SUBJECT" style={inputStyle} />
              <textarea placeholder="MESSAGE" rows="4" style={textAreaStyle}></textarea>
              
              <motion.button 
                whileHover={{ backgroundColor: "#00eaff", color: "#000" }}
                style={submitBtn}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Styles ---

const sectionStyle = {
  minHeight: "70vh",
  backgroundColor: "#080808",
  padding: "40px 10% 80px 10%", // ⭐ Reduced top padding from 100px to 40px
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Inter', sans-serif",
};

const container = {
  width: "100%",
  maxWidth: "1200px",
};

const contentGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr",
  gap: "100px",
  alignItems: "flex-start",
};

const leftSide = {
  display: "flex",
  flexDirection: "column",
};

const heading = {
  fontSize: "24px",
  fontWeight: "800",
  color: "#fff",
  marginBottom: "20px",
  letterSpacing: "1px",
};

const description = {
  fontSize: "16px",
  color: "#666",
  lineHeight: "1.7",
  marginBottom: "40px",
  maxWidth: "400px",
};

const infoGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "25px",
};

const infoItem = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

const infoLabel = {
  fontSize: "11px",
  color: "#00eaff",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "2px",
};

const infoValue = {
  fontSize: "16px",
  color: "#fff",
  textDecoration: "none",
  transition: "0.3s opacity",
};

const socialLinks = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
};

const socialValue = {
  ...infoValue,
  opacity: 0.7,
};

const separator = {
  color: "#222",
};

const rightSide = {
  width: "100%",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

const inputGroup = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
};

const inputStyle = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #1a1a1a",
  padding: "15px 0",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.3s ease",
  fontFamily: "monospace",
};

const textAreaStyle = {
  ...inputStyle,
  resize: "none",
};

const submitBtn = {
  alignSelf: "flex-start",
  padding: "15px 40px",
  background: "transparent",
  border: "1px solid #00eaff",
  color: "#00eaff",
  fontSize: "13px",
  fontWeight: "bold",
  letterSpacing: "2px",
  cursor: "pointer",
  transition: "0.4s",
};

export default Contact;