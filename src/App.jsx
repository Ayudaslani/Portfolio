import React from "react";

import "./App.css";
import SocialSidebar from "./components/SocialSidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <SocialSidebar />
      <Header />
      <Hero />
      <About></About>
      <Projects />
      <Skills />
      <Tools />
      <Contact />
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;
