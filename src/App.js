import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
// import Skills from "./components/skills/Skills";
import Contact from "./components/contacts/Contact";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Project from "./components/projects/Project";
import Footer from "./components/footer/Footer";
import ExperienceSection from "./components/experience/experience";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        {/* <Skills /> */}
        <ExperienceSection />
        <Project />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
    </>
  );
}

export default App;
