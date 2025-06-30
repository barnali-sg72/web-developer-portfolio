import phone3 from "../assets/images/savory-secrets/iphone.jpg";
import tablet3 from "../assets/images/savory-secrets/ipad.jpg";
import desktop3 from "../assets/images/savory-secrets/desktop.jpg";
import phone2 from "../assets/images/Weather-app/iphone.jpg";
import tablet2 from "../assets/images/Weather-app/ipad.jpg";
import desktop2 from "../assets/images/Weather-app/desktop.jpg";
import phone1 from "../assets/images/restaurant-app/iphone.jpg";
import tablet1 from "../assets/images/restaurant-app/ipad.jpg";
import desktop1 from "../assets/images/restaurant-app/desktop.jpg";
import phone4 from "../assets/images/portfolio-light/iphone.jpg";
import tablet4 from "../assets/images/portfolio-light/ipad.jpg";
import desktop4 from "../assets/images/portfolio-light/desktop.jpg";
import phone5 from "../assets/images/portfolio-dark/iphone.jpg";
import tablet5 from "../assets/images/portfolio-dark/ipad.jpg";
import desktop5 from "../assets/images/portfolio-dark/desktop.jpg";

import image11 from "../assets/images/restaurant-app/desktop.jpg";
import image12 from "../assets/images/restaurant-app/image2.jpg";
import image13 from "../assets/images/restaurant-app/image3.jpg";
import image14 from "../assets/images/restaurant-app/image4.jpg";
import image15 from "../assets/images/restaurant-app/image5.jpg";
import image16 from "../assets/images/restaurant-app/image6.jpg";
import image17 from "../assets/images/restaurant-app/image7.jpg";
import image18 from "../assets/images/restaurant-app/image8.jpg";
import image19 from "../assets/images/restaurant-app/image9.jpg";
import image110 from "../assets/images/restaurant-app/image10.jpg";
import image111 from "../assets/images/restaurant-app/image13.jpg";
import image112 from "../assets/images/restaurant-app/image12.jpg";
import image113 from "../assets/images/restaurant-app/image11.jpg";
import phoneImage11 from "../assets/images/restaurant-app/phone1.jpg";
import phoneImage12 from "../assets/images/restaurant-app/phone2.jpg";
import project1 from "../assets/images/restaurant-app/project.png";

import image21 from "../assets/images/Weather-app/desktop.jpg";
import image22 from "../assets/images/Weather-app/image6.jpg";
import image23 from "../assets/images/Weather-app/image3.jpg";
import image24 from "../assets/images/Weather-app/image4.jpg";
import image25 from "../assets/images/Weather-app/image2.jpg";
import image26 from "../assets/images/Weather-app/image1.jpg";
import image27 from "../assets/images/Weather-app/image7.jpg";
import phoneImage21 from "../assets/images/Weather-app/phone1.jpg";
import phoneImage22 from "../assets/images/Weather-app/phone2.jpg";
import project2 from "../assets/images/Weather-app/project.png";
import { motion } from "framer-motion";

import image31 from "../assets/images/savory-secrets/desktop.jpg";
import image32 from "../assets/images/savory-secrets/image2.jpg";
import image33 from "../assets/images/savory-secrets/image3.jpg";
import image34 from "../assets/images/savory-secrets/image4.jpg";
import image35 from "../assets/images/savory-secrets/image5.jpg";
import image36 from "../assets/images/savory-secrets/image6.jpg";
import image37 from "../assets/images/savory-secrets/image7.jpg";
import image38 from "../assets/images/savory-secrets/image8.jpg";
import image39 from "../assets/images/savory-secrets/image9.jpg";
import image310 from "../assets/images/savory-secrets/image10.jpg";
import phoneImage31 from "../assets/images/savory-secrets/phone1.jpg";
import phoneImage32 from "../assets/images/savory-secrets/phone2.jpg";
import project3 from "../assets/images/savory-secrets/project.png";

import image41 from "../assets/images/portfolio-light/desktop.jpg";
import image42 from "../assets/images/portfolio-light/image2.jpg";
import image43 from "../assets/images/portfolio-light/image3.jpg";
import image44 from "../assets/images/portfolio-light/image4.jpg";
import image45 from "../assets/images/portfolio-light/image5.jpg";
import image46 from "../assets/images/portfolio-light/image6.jpg";
import image47 from "../assets/images/portfolio-light/image7.jpg";
import image48 from "../assets/images/portfolio-light/image8.jpg";
import image49 from "../assets/images/portfolio-light/image9.jpg";
import image410 from "../assets/images/portfolio-light/image10.jpg";
import phoneImage41 from "../assets/images/portfolio-light/phone1.jpg";
import phoneImage42 from "../assets/images/portfolio-light/phone2.jpg";
import project4 from "../assets/images/portfolio-light/project.png";

import image51 from "../assets/images/portfolio-dark/desktop.jpg";
import image52 from "../assets/images/portfolio-dark/image2.jpg";
import image53 from "../assets/images/portfolio-dark/image3.jpg";
import image54 from "../assets/images/portfolio-dark/image4.jpg";
import image55 from "../assets/images/portfolio-dark/image5.jpg";
import image56 from "../assets/images/portfolio-dark/image6.jpg";
import image57 from "../assets/images/portfolio-dark/image7.jpg";
import image58 from "../assets/images/portfolio-dark/image8.jpg";
import image59 from "../assets/images/portfolio-dark/image9.jpg";
import image510 from "../assets/images/portfolio-dark/image10.jpg";
import phoneImage51 from "../assets/images/portfolio-dark/phone1.jpg";
import phoneImage52 from "../assets/images/portfolio-dark/phone2.jpg";
import project5 from "../assets/images/portfolio-dark/project.png";

import { FaProjectDiagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export const projects = [
  {
    id: 1,
    title: "The Golden Table",
    description: `A fully responsive, visually appealing restaurant website designed to 
      showcase a modern dining brand. The site features a clean layout with intuitive navigation, 
      an interactive menu with category selection, reservation booking form, and online ordering sections. 
      The design is optimized for all devices, ensuring a seamless user experience across desktop, tablet, and mobile platforms.
      The website is built using React, HTML, and CSS, providing a dynamic and engaging interface for users to explore the restaurant's offerings.  `,
    features: [
      "Custom website development",
      "Responsive design for optimal viewing on desktop, tablet, and mobile devices",
      "Integrated reservation system for easy booking",
      "Online food order system for convenient meal selection",
      "Menu showcasing with detailed descriptions and images",
    ],
    skills: "React, HTML, CSS, Javascript",
    github: "https://github.com/barnali-sg72/the-golden-table.git",
    projectImage: project1,
    desktopImage: desktop1,
    tabletImage: tablet1,
    phoneImage: phone1,
    phoneImage1: phoneImage11,
    phoneImage2: phoneImage12,
    images: [
      { img: image11, title: "Home Page" },
      { img: image12, title: "Testimonials Section" },
      { img: image13, title: "About Section" },
      { img: image14, title: "Menu Page" },
      { img: image15, title: "Menu Options Section" },
      { img: image16, title: "Menu List Page" },
      { img: image17, title: "Menu Detail Section" },
      { img: image18, title: "Table Reservation Page" },
      { img: image19, title: "Table Reservation Form" },
      { img: image110, title: "Order Page" },
      { img: image111, title: "Order List Section" },
      { img: image112, title: "Order Checkout Page" },
      { img: image113, title: "Order Checkout Form" },
    ],
    liveDemo: "https://the-golden-table.vercel.app/",
  },
  {
    id: 2,
    title: "Weather Sphere",
    description: `A modern, responsive weather application that delivers accurate and dynamic weather forecasts for 
      locations around the world. The app features current weather, hourly and 7-day forecasts, and a sleek
       UI with animated icons and transitions. Built with React and Tailwind CSS, it integrates with 
       the OpenWeatherMap API to fetch real-time data.`,
    features: [
      "Display of current temperature, humidity, wind speed, and weather description",
      "Responsive design for optimal viewing on desktop, tablet, and mobile devices",
      "Detailed forecast for the next 7 days, including temperature, precipitation, and weather conditions",
      "Ability to search for weather information by city name",
      "Hourly forecast for the next 24 hours, including temperature, precipitation, and weather conditions",
      "User-friendly interface with easy navigation",
      "Automatic detection of user's location and display of corresponding weather information",
    ],
    api: "https://openweathermap.org/api",
    skills: "React, Bootstrap, HTML, CSS, JavaScript",
    github: "https://github.com/barnali-sg72/world-weather.git",
    projectImage: project2,
    desktopImage: desktop2,
    tabletImage: tablet2,
    phoneImage: phone2,
    phoneImage1: phoneImage21,
    phoneImage2: phoneImage22,
    images: [
      { img: image21, title: "Home Page" },
      { img: image22, title: "Global City Weather" },
      { img: image23, title: "Today's Weather" },
      { img: image24, title: "Today's detail Weather" },
      { img: image25, title: "Hourly Forecast" },
      { img: image26, title: "Daily Forecast" },
      { img: image27, title: "Global City Detailed Weather" },
    ],
    liveDemo: "https://world-weather-gules.vercel.app/",
  },
  {
    id: 3,
    title: "Savory Secrets",
    description: `A sleek and user-friendly recipe website built for food lovers to explore and search 
    for their favorite dishes. The site features categorized recipes with detailed ingredients, step-by-step 
    instructions, cooking time, and user ratins and reviews. The layout is fully responsive and optimized for both desktop and mobile users, ensuring a seamless experience across all devices.
    The website provides a dynamic and engaging interface for users to explore the world of culinary delights.  `,
    features: [
      "Custom website development",
      "Responsive design for optimal viewing on desktop, tablet, and mobile devices",
      "A comprehensive collection of recipes with images, ingredients, and instructions",
      "User-friendly interface with easy navigation",
      "Search functionality to find recipes by name, ingredients, or meal type",
    ],
    api: "https://spoonacular.com/food-api",
    skills:
      "React, Bootstrap, Python, MongoDB, HTML, CSS, JavaScript, TypeScript",
    github: "https://github.com/barnali-sg72/savory-secrets.git",
    projectImage: project3,
    desktopImage: desktop3,
    tabletImage: tablet3,
    phoneImage: phone3,
    phoneImage1: phoneImage31,
    phoneImage2: phoneImage32,
    images: [
      { img: image31, title: "Home Page" },
      { img: image32, title: "Explore Dinner Recipes" },
      { img: image33, title: "Our Mission" },
      { img: image34, title: "Recipe List" },
      { img: image35, title: "Search Recipes By Meal Type" },
      { img: image36, title: "Popular Meal Categories" },
      { img: image37, title: "Search Recipes By Ingredient" },
      { img: image38, title: "Popular Ingredient Categories" },
      { img: image39, title: "About Us" },
      { img: image310, title: "Contact Us" },
    ],
    liveDemo: "https://savory-secrets-three.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Website - Light",
    description: `A modern, responsive personal portfolio website built with React and Tailwind CSS 
    to showcase my web development skills, projects, and professional background. The site features 
    a dynamic homepage, an about section, a projects gallery, a contact form, and smooth navigation 
    using React Router. It supports both light and dark themes and is optimized for performance and 
    accessibility.`,
    features: [
      "Responsive design for all screen sizes",
      "Light/Dark theme toggle",
      "Scroll-based navigation highlighting",
      "Smooth animations using Framer Motion",
      "Dynamic homepage with introduction and skills",
      "About section with professional background and experience",
      "Skills section with icons",
      "Certifications section with badges and links",
      "Projects section with photo gallery and GitHub links",
      "Services section with detailed offerings",
      "Contact form with validation",
      "SEO-friendly structure",
    ],

    skills:
      "React, Tailwind,  HTML, CSS, JavaScript, React Router, Framer Motion",
    github: "",
    projectImage: project4,
    desktopImage: desktop4,
    tabletImage: tablet4,
    phoneImage: phone4,
    phoneImage1: phoneImage41,
    phoneImage2: phoneImage42,
    images: [
      { img: image41, title: "Home Page" },
      { img: image42, title: "About" },
      { img: image43, title: "Skills" },
      { img: image44, title: "Certifications" },
      { img: image410, title: "Projects" },
      { img: image45, title: "Services" },
      { img: image46, title: "Contact me" },
      { img: image47, title: "Project Details" },
      { img: image48, title: "Project Details" },
      { img: image49, title: "Project Details" },
    ],
  },
  {
    id: 5,
    title: "Portfolio Website - Dark",
    description: `A modern, responsive personal portfolio website built with React and Tailwind CSS 
    to showcase my web development skills, projects, and professional background. The site features 
    a dynamic homepage, an about section, a projects gallery, a contact form, and smooth navigation 
    using React Router. It supports both light and dark themes and is optimized for performance and 
    accessibility.`,
    features: [
      "Responsive design for all screen sizes",
      "Light/Dark theme toggle",
      "Scroll-based navigation highlighting",
      "Smooth animations using Framer Motion",
      "Dynamic homepage with introduction and skills",
      "About section with professional background and experience",
      "Skills section with icons",
      "Certifications section with badges and links",
      "Projects section with photo gallery and GitHub links",
      "Services section with detailed offerings",
      "Contact form with validation",
      "SEO-friendly structure",
    ],

    skills:
      "React, Tailwind,  HTML, CSS, JavaScript, React Router, Framer Motion",
    github: "",
    projectImage: project5,
    desktopImage: desktop5,
    tabletImage: tablet5,
    phoneImage: phone5,
    phoneImage1: phoneImage51,
    phoneImage2: phoneImage52,
    images: [
      { img: image51, title: "Home Page" },
      { img: image52, title: "About" },
      { img: image53, title: "Skills" },
      { img: image54, title: "Certifications" },
      { img: image510, title: "Projects" },
      { img: image55, title: "Services" },
      { img: image56, title: "Contact me" },
      { img: image57, title: "Project Details" },
      { img: image58, title: "Project Details" },
      { img: image59, title: "Project Details" },
    ],
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === parseInt(id));
}

export default function Projects() {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  useEffect(() => {
    context.setSelectedMenu("Projects");
    localStorage.setItem("selectedMenu", "Projects");
  }, []);

  const handleClick = (e) => {
    const projectId = e.currentTarget.getAttribute("data-id");
    navigate(`/project/${projectId}`);
    //navigate(0); // To force reload the page to fetch new data
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="projects"
      className="  min-h-screen scroll-mt-32 flex flex-col gap-5 p-10  dark:bg-slate-900 "
    >
      <h2 className="mb-6 inline-flex font-header uppercase  text-2xl sm:text-3xl md:text-4xl text-slate-800 dark:text-slate-100 font-extrabold ">
        <FaProjectDiagram className="text-indigo-500 dark:text-indigo-400" />
        &nbsp; Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  items-stretch pb-10">
        {projects.map((project, ind) => (
          <article
            className="project relative flex flex-col h-full cursor-pointer overflow-hidden shadow-lg shadow-slate-300  hover:[box-shadow:0_0_25px_#6366f1]  dark:[box-shadow:2px_2px_25px_rgba(2,6,23,0.5)] dark:hover:[box-shadow:0_0_25px_#99f6e4]  bg-white dark:bg-slate-800  rounded-2xl  w-full self-center "
            data-id={project.id}
            onClick={handleClick}
            key={ind}
          >
            <div className=" w-full max-w-4xl p-5  bg-gradient-to-b from-indigo-200 via-cyan-200 to-white dark:from-indigo-800 dark:via-cyan-800 dark:to-slate-800 ">
              <img
                src={project.projectImage}
                alt="project"
                className="w-full  "
                loading="lazy"
              ></img>
            </div>
            <div className="flex items-end justify-center project-overlay absolute bottom-0 left-0 w-full  h-full bg-gradient-to-b from-transparent to-white dark:from-transparent dark:to-slate-800 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <span className="px-6  mb-10   text-indigo-600 dark:text-white font-semibold transition">
                Click to view details
              </span>
            </div>

            <div className="  flex flex-col gap-3 text-xs sm:text-sm px-5 pb-3 w-full my-4 me-5  text-slate-700  dark:text-slate-300">
              <h4 className="font-header text-indigo-700 dark:text-indigo-400 font-bold text-base md:text-xl ">
                {project.title}
              </h4>
              <p className=" ">
                {project.description.split(". ")[0].concat(".")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
