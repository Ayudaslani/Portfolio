import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Nerova Shipping Solutions - client Project",
      desc: "A smart shipping solution offering fast, reliable, and transparent logistics management for businesses.",
      tech: ["Html", "Css", "Bootstrap", "Javascript"],
      link: "https://nerovashipping.in/",
      image: "./image/nerovashipping.png",
    },
    {
      id: 2,
      title: "Vcare Healthcare",
      desc: "Expert doctors, reliable treatment.",
      tech: ["Html", "Css", "Bootstrap", "Figma"],
      link: "./src/assets/projects/doctor/index.html",
      image: "./image/vcare.png",
    },
    {
      id: 3,
      title: "Megamart website",
      desc: "MegaMart brings smart, simple, and budget-friendly online shopping to your fingertips.",
      tech: ["React", "Html", "Css", "Bootstrap"],
      link: "https://megamart-7a376.web.app/",
      image: "./image/image.png",
    },
    {
      id: 4,
      title: "Flower Add To Cart",
      desc: "A flower shop website with fully working add-to-cart functionality",
      tech: ["Html", "Css", "Bootstrap", "Javascript"],
      link: "https://add-to-cart-two-pearl.vercel.app/product.html",
      image: "./image/addtocart.png",
    },
    {
      id: 5,
      title: "Get The Corona API data",
      desc: "Get  data of the Corona API",
      tech: ["Html", "Css", "Javascript"],
      link: "./src/assets/projects/Corona_API/index.html",
      image: "./image/coronaapi.png",
    },
    {
      id: 6,
      title: "Yoga Website",
      desc: "A calming yoga website offering guided poses, wellness tips, and a user-friendly practice experience.",
      tech: ["Html", "Css", "Bootstrap", "Javascript"],
      link: "./src/assets/projects/yoga/index.html",
      image: "./image/yoga.png",
    },

  ];

  return (
    <section id="projects" style={sectionStyle} className="projects-section">
      <style>
        {`
          @media (max-width: 768px) {
            .projects-section {
              padding: 40px 20px !important; /* Reduced top/bottom padding for mobile */
            }
            .project-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .project-header-row {
              margin-bottom: 30px !important; /* Reduced header margin */
            }
            .project-heading {
              font-size: 22px !important;
            }
          }

          .project-card:hover .project-img {
            transform: scale(1.1);
          }
          .project-card:hover .project-overlay {
            opacity: 1 !important;
          }
        `}
      </style>

      <div style={container}>
        {/* Section Header */}
        <div style={headerRow} className="project-header-row">
          <h2 style={heading} className="project-heading">
            <span style={labelNumber}>02.</span> FEATURED PROJECTS
          </h2>
          <div style={horizontalLine}></div>
        </div>

        {/* Project Grid */}
        <div style={projectGrid} className="project-grid">
          {projectData.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={projectCard}
              className="project-card"
              whileHover={{ y: -10 }}
            >
              <div style={imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={imageStyle}
                  className="project-img"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x250/111/00eaff?text=Project+Preview"; }}
                />
                <div style={overlay} className="project-overlay">
                  <span style={viewText}>VIEW PROJECT ↗</span>
                </div>
              </div>

              <div style={infoSection}>
                <h3 style={projectTitle}>{project.title}</h3>
                <p style={projectDesc}>{project.desc}</p>
                <div style={techRow}>
                  {project.tech.map((t) => (
                    <span key={t} style={techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Updated Styles to fix top space ---

const sectionStyle = {
  padding: "60px 10% 100px 10%", // ⭐ Reduced top padding from 100px to 60px
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
  whiteSpace: "nowrap",
};

const horizontalLine = {
  height: "1px",
  background: "#1a1a1a",
  width: "100%",
};

const projectGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
};

const projectCard = {
  textDecoration: "none",
  background: "#0d0d0d",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid #1a1a1a",
  transition: "border 0.3s ease, transform 0.3s ease",
  display: "block",
};

const imageContainer = {
  position: "relative",
  width: "100%",
  height: "200px",
  overflow: "hidden",
  backgroundColor: "#111",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: "0.8",
  transition: "transform 0.5s ease",
};

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 234, 255, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
};

const viewText = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "14px",
  border: "1px solid #fff",
  padding: "8px 16px",
  borderRadius: "4px",
};

const infoSection = {
  padding: "20px",
};

const projectTitle = {
  fontSize: "18px",
  color: "#fff",
  marginBottom: "10px",
};

const projectDesc = {
  fontSize: "14px",
  color: "#777",
  lineHeight: "1.5",
  marginBottom: "20px",
  minHeight: "42px",
};

const techRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const techTag = {
  fontSize: "11px",
  color: "#00eaff",
  fontFamily: "monospace",
  background: "rgba(0, 234, 255, 0.05)",
  padding: "4px 8px",
  borderRadius: "4px",
};

export default Projects;