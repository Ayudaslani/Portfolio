import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function SocialSidebar() {
  return (
    <div className="sidebar">
      <a href="https://github.com" target="_blank"><FaGithub /></a>
      <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
      <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
    </div>
  );
}

export default SocialSidebar;
