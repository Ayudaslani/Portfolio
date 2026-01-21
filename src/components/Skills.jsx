import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillData = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React JS", "jQuery", "Bootstrap"],
      icon: "◇"
    },
    {
      category: "Backend",
      skills: ["Node JS", "Express JS"],
      icon: "◈"
    },
    {
      category: "Database",
      skills: ["MongoDB", "Mongoose", "Firebase"],
      icon: "◆"
    }
  ];

  return (
    <section id="skills" style={sectionStyle} className="skills-section">
      <style>
        {`
          @media (max-width: 768px) {
            .skills-section {
              padding: 40px 20px !important; /* ⭐ Reduced mobile padding */
            }
            .skills-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .skill-card {
              padding: 25px 20px !important;
            }
            .skills-header-row {
              margin-bottom: 30px !important; /* ⭐ Reduced mobile gap */
            }
            .skills-heading {
              font-size: 22px !important;
            }
          }
        `}
      </style>

      <div style={container}>
        {/* Header Row */}
        <div style={headerRow} className="skills-header-row">
          <h2 style={heading} className="skills-heading">
            <span style={labelNumber}>03.</span> TECH STACK
          </h2>
          <div style={horizontalLine}></div>
        </div>

        {/* Skill Columns */}
        <div style={skillsGrid} className="skills-grid">
          {skillData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              style={skillCard}
              className="skill-card"
            >
              <div style={cardHeader}>
                <span style={categoryIcon}>{item.icon}</span>
                <h3 style={categoryTitle}>{item.category}</h3>
              </div>
              
              <div style={skillList}>
                {item.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10, color: "#00eaff" }}
                    style={skillItem}
                  >
                    <span style={bullet}>—</span>
                    <span style={skillText}>{skill}</span>
                  </motion.div>
                ))}
              </div>
              
              <div style={cornerAccent}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Styles Adjusted for Less Space ---

const sectionStyle = {
  padding: "60px 10%", // ⭐ Reduced from 100px to 60px (Top and Bottom)
  backgroundColor: "#080808",
  display: "flex",
  justifyContent: "center",
  fontFamily: "'Inter', sans-serif",
};

const container = {
  width: "100%",
  maxWidth: "1200px",
};

const headerRow = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "40px", // ⭐ Reduced from 60px to 40px
};

const labelNumber = {
  color: "#00eaff",
  fontFamily: "monospace",
  fontSize: "20px",
};

const heading = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#fff",
  letterSpacing: "1px",
};

const horizontalLine = {
  height: "1px",
  background: "linear-gradient(90deg, #1a1a1a, transparent)",
  flex: 1,
};

const skillsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px",
};

const skillCard = {
  background: "linear-gradient(145deg, #0d0d0d 0%, #080808 100%)",
  border: "1px solid #1a1a1a",
  padding: "40px",
  borderRadius: "20px",
  position: "relative",
  overflow: "hidden",
  transition: "border-color 0.3s ease",
};

const cardHeader = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginBottom: "30px",
  borderBottom: "1px solid #1a1a1a",
  paddingBottom: "15px",
};

const categoryIcon = {
  color: "#00eaff",
  fontSize: "20px",
};

const categoryTitle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "2px",
};

const skillList = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const skillItem = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const bullet = {
  color: "#333",
  fontSize: "14px",
};

const skillText = {
  fontSize: "16px",
  color: "#888",
  fontWeight: "500",
};

const cornerAccent = {
  position: "absolute",
  top: 0,
  right: 0,
  width: "40px",
  height: "40px",
  background: "linear-gradient(225deg, #00eaff22 0%, transparent 50%)",
};

export default Skills;