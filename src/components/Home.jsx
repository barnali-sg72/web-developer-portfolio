import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import { AppContext } from "../App";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Skills from "./Skills";
import Certifications from "./Certifications";
import useScrollSpy from "./hooks/useScrollSpy";

/*const sections = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "certifications", title: "Certifications" },
  { id: "projects", title: "Projects" },
  { id: "services", title: "Services" },
  { id: "contact", title: "Contact" },
];

/*const sectionsMap = new Map([
  ["hero", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["certifications", "Certifications"],
  ["projects", "Projects"],
  ["services", "Services"],
  ["contact", "Contact"],
]);*/

function Home() {
  const { section } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  return (
    <div className="font-sans bg-indigo-50 dark:bg-slate-950 mb-0">
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
