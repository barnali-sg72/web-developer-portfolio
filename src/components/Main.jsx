import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import ProjectDetails from "./ProjectDetails";
import { AnimatePresence } from "framer-motion";
import Skills from "./Skills";
import ScrollToTop from "./ScrollToTop";
import { AppView } from "../App";
import Home from "./Home";
import Certifications from "./Certifications";

export default function Main() {
  return (
    <main className="bg-indigo-50 dark:bg-slate-900  my-auto flex flex-col grow ">
      <AnimatePresence>
        {AppView === "Multi Page" && (
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Hero />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/certifications" element={<Certifications />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/project/:id" element={<ProjectDetails />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        )}
        {AppView === "Single Page" && (
          <Routes>
            <Route index element={<Home />} />
            <Route path="/:section" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />}></Route>
          </Routes>
        )}
      </AnimatePresence>
    </main>
  );
}
