import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Nerova Shipping Solutions",
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
      title: "Corona API Data",
      desc: "Live tracking and data visualization of Corona API stats.",
      tech: ["Html", "Css", "Javascript"],
      link: "./src/assets/projects/Corona_API/index.html",
      image: "./image/coronaapi.png",
    },
    {
      id: 6,
      title: "Yoga Website",
      desc: "A calming yoga website offering guided poses and wellness tips.",
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
              padding: 60px 15px !important;
            }
            .project-grid {
              grid-template-columns: 1fr !important; /* Forces single column on mobile */
              gap: 25px !important;
            }
            .project-heading {
              font-size: 20px !important;
            }
            .project-card {
              max-width: 100% !important;
            }
          }

          /* Hover animations */
          .project-card:hover {
            border-color: #00eaff !important;
            background: #111 !important;
          }
          .project-card:hover .project-img {
            transform: scale(1.08);
            opacity: 1 !important;
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={projectCard}
              className="project-card"
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
                  <span style={viewText}>EXPLORE ↗</span>
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

// --- Styles ---

const sectionStyle = {
  padding: "80px 8%",
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
  marginBottom: "50px",
};

const labelNumber = {
  color: "#00eaff",
  fontFamily: "monospace",
  fontSize: "clamp(16px, 2vw, 20px)",
};

const heading = {
  fontSize: "clamp(22px, 3vw, 28px)",
  fontWeight: "800",
  color: "#fff",
  whiteSpace: "nowrap",
  letterSpacing: "1px",
};

const horizontalLine = {
  height: "1px",
  background: "linear-gradient(90deg, #1a1a1a, transparent)",
  width: "100%",
};

const projectGrid = {
  display: "grid",
  // Fixed responsiveness: minmax set to a safer 280px
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "30px",
};

const projectCard = {
  textDecoration: "none",
  background: "#0d0d0d",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid #1a1a1a",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  display: "flex",
  flexDirection: "column",
};

const imageContainer = {
  position: "relative",
  width: "100%",
  paddingTop: "56.25%", // 16:9 Aspect Ratio
  overflow: "hidden",
  backgroundColor: "#111",
};

const imageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: "0.7",
  transition: "all 0.5s ease",
};

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to top, rgba(0, 234, 255, 0.4), transparent)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
};

const viewText = {
  color: "#fff",
  fontWeight: "800",
  fontSize: "12px",
  letterSpacing: "1px",
  background: "#000",
  padding: "10px 20px",
  borderRadius: "4px",
  border: "1px solid #00eaff",
};

const infoSection = {
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
};

const projectTitle = {
  fontSize: "19px",
  fontWeight: "700",
  color: "#fff",
  marginBottom: "12px",
};

const projectDesc = {
  fontSize: "14px",
  color: "#888",
  lineHeight: "1.6",
  marginBottom: "20px",
};

const techRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "auto", // Keeps tags at the bottom
};

const techTag = {
  fontSize: "10px",
  color: "#00eaff",
  fontFamily: "monospace",
  background: "rgba(0, 234, 255, 0.05)",
  border: "1px solid rgba(0, 234, 255, 0.1)",
  padding: "4px 10px",
  borderRadius: "4px",
  textTransform: "uppercase",
};

export default Projects;