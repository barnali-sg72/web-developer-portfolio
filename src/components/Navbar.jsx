import { HamburgerIcon, MenuIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { PiStack } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import App, { AppContext, AppView } from "../App";
import { HashLink } from "react-router-hash-link";
import useScrollSpy from "./hooks/useScrollSpy";

const sections = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "certifications", title: "Certifications" },
  { id: "projects", title: "Projects" },
  { id: "services", title: "Services" },
  { id: "contact", title: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const context = useContext(AppContext);
  const activeId = useScrollSpy(sections, 200, AppView === "Single Page");
  const activeSection =
    sections.find((section) => section.id === activeId)?.title || "Home";

  const customScroll = (el, options) => {
    setTimeout(() => {
      el.scrollIntoView(options);
    }, 400); // Delay of 0.5 seconds
  };

  useEffect(() => {
    const storedMenu = localStorage.getItem("selectedMenu");
    if (storedMenu) {
      context.setSelectedMenu(storedMenu);
    } else {
      context.setSelectedMenu("Home");
    }
  }, []);
  const handleButtonClick = () => {
    const elem = document.getElementById("menu");
    if (elem.classList.contains("invisible")) {
      elem.classList.add("opacity-100");
      elem.classList.remove("opacity-0");
      elem.classList.add("visible");
      elem.classList.remove("invisible");
    } else {
      elem.classList.add("opacity-0");
      elem.classList.remove("opacity-100");
      elem.classList.add("invisible");
      elem.classList.remove("visible");
    }
  };

  const handleMenuClick = (e) => {
    const elem = e.target;
    context.setSelectedMenu(elem.textContent);
    localStorage.setItem("selectedMenu", elem.textContent);
    handleButtonClick(); // Close the menu after clicking
  };

  return (
    <nav className="p-6 flex-grow lg:flex-grow-0">
      <button
        className="block lg:hidden text-indigo-400 relative"
        onClick={handleButtonClick}
      >
        <MenuIcon></MenuIcon>
      </button>
      {AppView === "Single Page" && (
        <ul
          id="menu"
          className="transition-all duration-[1s] ease-in-out absolute lg:static invisible lg:visible opacity-0 lg:opacity-100 bg-white dark:bg-slate-900 lg:bg-inherit p-4 lg:p-0 list-none flex flex-col lg:flex-row gap-[2rem] text-indigo-500 dark:text-indigo-400 font-bold justify-end uppercase"
        >
          <li className="">
            <HashLink
              to="/#hero"
              scroll={customScroll}
              className={
                activeSection === "Home"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              onClick={handleMenuClick}
            >
              Home
            </HashLink>
          </li>
          <li className="">
            <HashLink
              to="/#about"
              scroll={customScroll}
              className={
                activeSection === "About"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              onClick={handleMenuClick}
            >
              About
            </HashLink>
          </li>
          <li className="">
            <HashLink
              to="/#skills"
              scroll={customScroll}
              className={
                activeSection === "Skills"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              onClick={handleMenuClick}
            >
              Skills
            </HashLink>
          </li>
          <li className="">
            <HashLink
              to="/#certifications"
              scroll={customScroll}
              className={
                activeSection === "Certifications"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              onClick={handleMenuClick}
            >
              Certifications
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#projects"
              scroll={customScroll}
              className={
                activeSection === "Projects"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              onClick={handleMenuClick}
            >
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#services"
              scroll={customScroll}
              className={
                activeSection === "Services"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              onClick={handleMenuClick}
            >
              Services
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#contact"
              scroll={customScroll}
              className={
                activeSection === "Contact"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              onClick={handleMenuClick}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      )}
      {AppView === "Multi Page" && (
        <ul
          id="menu"
          className=" absolute lg:static invisible lg:visible opacity-0 lg:opacity-100 bg-white dark:bg-slate-950 p-4 lg:p-0 list-none flex flex-col lg:flex-row gap-[2rem] text-indigo-500 dark:text-indigo-400 font-bold justify-end uppercase"
        >
          <li className="">
            <a
              className={
                context.selectedMenu === "Home"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              href="/home"
              onClick={handleMenuClick}
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              className={
                context.selectedMenu === "About"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              href="/about"
              onClick={handleMenuClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={
                context.selectedMenu === "Skills"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              href="/skills"
              onClick={handleMenuClick}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={
                context.selectedMenu === "Certifications"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              href="/certifications"
              onClick={handleMenuClick}
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              className={
                context.selectedMenu === "Projects"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              href="/projects"
              onClick={handleMenuClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={
                context.selectedMenu === "Services"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              href="/services"
              onClick={handleMenuClick}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={
                context.selectedMenu === "Contact"
                  ? "bg-indigo-500 text-white p-1 rounded-md dark:bg-indigo-700"
                  : ""
              }
              href="/contact"
              onClick={handleMenuClick}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
      {/*<hr className="text-indigo-300 mt-5" />*/}
    </nav>
  );
}
