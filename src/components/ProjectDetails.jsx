import { useEffect, useState } from "react";
import { Icons } from "./utils";
import { getProjectById } from "./Projects";
import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { motion, scale } from "framer-motion";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Laptop from "./Laptop";
import { ExternalLink } from "lucide-react";
import Phone from "./Phone";
import OverlappingIPhones from "./OverlappingIphones";

/*const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};*/

const sectionVariants = {
  hidden: { opacity: 0.5 },
  visible: (i = 1) => ({
    opacity: 1,

    transition: {
      //delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id) return;
    const proj = getProjectById(parseInt(id));
    if (proj) {
      setProject({
        id: proj.id,
        title: proj.title,
        description: proj.description,
        features: proj.features,
        api: proj.api,
        desktopImage: proj.desktopImage,
        tabletImage: proj.tabletImage,
        phoneImage: proj.phoneImage,
        phoneImage1: proj.phoneImage1,
        phoneImage2: proj.phoneImage2,
        skills: proj.skills,
        github: proj.github,
        images: proj.images,
        liveDemo: proj.liveDemo,
      });
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Project Details:", project);
    const container = document.querySelector(".image-list");
    if (!container) return;
    setTimeout(() => {
      checkButtons(container.scrollWidth);
    }, 400); // D

    container.addEventListener("scroll", checkButtons);
    return () => {
      container.removeEventListener("scroll", checkButtons);
    };
  }, [project]);

  const handleClick = (direction) => {
    const list = document.querySelector(".image-list");
    const item = document.querySelector(".image-item");
    const itemWidth = item ? item.offsetWidth : 0;
    const listWidth = list.scrollWidth;

    if (direction === "prev") {
      list.scrollBy({
        left: -itemWidth,
        behavior: "smooth",
      });
    } else if (direction === "next") {
      list.scrollBy({
        left: itemWidth,
        behavior: "smooth",
      });
    }
    checkButtons();
  };

  function checkButtons() {
    const container = document.querySelector(".image-list");
    const btnLeft = document.querySelector(".btn-left");
    const btnRight = document.querySelector(".btn-right");
    //alert(container.scrollLeft + " " + container.scrollWidth);
    // Disable the left button if on the first slide
    if (container.scrollLeft <= 0) {
      btnLeft.classList.add("disabled");
    } else {
      btnLeft.classList.remove("disabled");
    }

    // Disable the right button if on the last slide
    // You'll need to calculate the scroll position for the end of the slideshow.
    // This might involve the total width of the slides and the width of the container.
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      btnRight.classList.add("disabled");
    } else {
      btnRight.classList.remove("disabled");
    }
  }

  const handleSelectImage = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const imageId = target.getAttribute("href").replace("#", "");
    const imageElement = document.getElementById(imageId);
    const mode = localStorage.getItem("theme") || "light";

    removeSelectedClass(mode); // Remove any previously selected class
    if (imageElement) {
      imageElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      imageElement.classList.add(
        mode == "dark" ? "selected-dark" : "selected-light"
      );
      setTimeout(() => {
        imageElement.classList.remove(
          mode == "dark" ? "selected-dark" : "selected-light"
        );
      }, 6000); // Remove the class after 1 second
    }
  };

  const removeSelectedClass = (mode) => {
    const selectedImage = document.querySelector(
      mode == "dark" ? "selected-dark" : "selected-light"
    );
    if (selectedImage) {
      selectedImage.classList.remove("selected-light");
      selectedImage.classList.remove("selected-dark");
    }
  };

  return (
    <>
      {project ? (
        <section className=" flex flex-col  bg-white dark:bg-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-10 p-10 md:px-10 md:pt-10  bg-[linear-gradient(to_bottom,#e0e7ff,#cffafe,transparent)]   dark:bg-slate-950 dark:bg-[linear-gradient(195deg,#0e7490,transparent_25%),linear-gradient(165deg,#4338ca,transparent_25%)]"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="  text-center font-header uppercase text-3xl sm:text-4xl md:text-5xl  text-indigo-500 dark:text-indigo-400 font-extrabold mt-5"
            >
              {project.title}
            </motion.h1>
            <p className="text-slate-800 dark:text-slate-300 text-sm md:text-base w-full md:w-2/3 ">
              {project.description}{" "}
            </p>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-2 items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-semibold transition"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            {/*<div className="flex flex-col items-center justify-center mt-5">
              <span class="animate-bounce text-indigo-500 text-3xl">
                &darr;
              </span>
              <span class="mt-1 text-indigo-500 text-sm">Scroll Down</span>
            </div>*/}

            <motion.div
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex relative w-[97%] sm:w-[70%]  gap-5 justify-between"
            >
              <button className="btn-left " onClick={() => handleClick("prev")}>
                <FaCircleArrowLeft className=" text-indigo-500 dark:text-indigo-500 w-5 h-5 sm:w-7 sm:h-7" />
              </button>
              <Laptop>
                <ul className="image-list flex  justify-evenly overflow-x-auto   snap-x snap-mandatory  scrollbar-hide  ">
                  {project.images.map((src, i) => (
                    <motion.li
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.5 }}
                      variants={sectionVariants}
                      custom={i * 0.2}
                      key={i}
                      id={`image-${i}`}
                      className="image-item   dark:border-slate-800 w-full md:w-full flex-shrink-0 snap-center  overflow-hidden"
                    >
                      <div className="relative w-full h-full">
                        {" "}
                        <img
                          key={i}
                          src={src.img}
                          alt={`Image ${i + 1}`}
                          className="  w-full  object-cover   "
                        />
                        <div className="overlay w-full font-semibold text-sm">
                          {" "}
                          {src.title}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </Laptop>

              <button className="btn-right" onClick={() => handleClick("next")}>
                <FaCircleArrowRight className="text-indigo-500 dark:text-indigo-500 w-5 h-5 sm:w-7 sm:h-7" />
              </button>
            </motion.div>
            <motion.aside
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" flex flex-col items-center justify-center mt-5"
            >
              <div className="w-1/2 flex flex-row items-center justify-center gap-2 ">
                {project.images.map((src, i) => (
                  <a
                    href={`#image-${i}`}
                    className="image-item  flex-shrink-0 snap-start rounded-sm sm:rounded-md border border-cyan-500 dark:border-cyan-400 overflow-hidden"
                    onClick={handleSelectImage}
                  >
                    <img
                      key={i}
                      src={src.img}
                      alt={`Image ${i + 1}`}
                      title={src.title}
                      className="w-[1rem]  sm:w-[2rem] md:w-[3rem] lg:w-[4rem] object-cover   "
                    />
                  </a>
                ))}
              </div>
            </motion.aside>
          </motion.div>

          <article
            className="flex flex-col items-center justify-center w-full h-full  
             bg-[linear-gradient(225deg,#c7d2fe,transparent,#a5f3fc)] 
          dark:bg-[linear-gradient(225deg,#6366f1,#312e81,transparent,#155e75,#06b6d4,#155e75,transparent)] sm:dark:bg-[linear-gradient(195deg,#6366f1,transparent_30%,transparent_70%,#06b6d4)]
           text-slate-800 dark:text-slate-300   "
          >
            {/*<motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full p-10  flex   gap-5 "
            >
              <div className="flex flex-col  justify-between p-5 rounded-xl dark:bg-slate-800">
                <h5 className="mb-3 text-indigo-700 dark:text-indigo-400 text-base md:text-xl font-semibold">
                  Description:
                </h5>
                <p className=" w-full mt-2 text-center md:text-start  dark:text-indigo-50">
                  {project.description}
                </p>
              </div>
            </motion.section>*/}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full grid sm:grid-cols-2 p-10 rounded-xl gap-10 "
            >
              <div className="flex flex-col row-start-2 sm:row-start-1 gap-5 justify-self-center p-5 rounded-xl shadow-lg  shadow-slate-300 bg-white dark:bg-slate-800 dark:shadow-none">
                <h5 className="mb-3 text-indigo-700 dark:text-indigo-400 text-base md:text-xl font-semibold">
                  Features:
                </h5>
                <ul className="list-none list-inside text-sm md:text-base ">
                  {project.features.map((item, index) => (
                    <li key={index} className="mb-2">
                      <FaCheck className="inline text-cyan-400 me-2" />
                      {item.trim()}
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" flex flex-row justify-center items-center ">
                <div className="w-1/3 sm:w-1/2 flex flex-col overflow-hidden justify-center items-center border border-gray-600  rounded-lg sm:rounded-xl md:rounded-2xl">
                  <img
                    src={project.tabletImage}
                    alt="tablet"
                    className=" w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl  border-4 border-gray-500 dark:border-gray-400  "
                  />
                </div>
                <div className="w-1/6 sm:w-1/4 flex flex-col overflow-hidden justify-center items-center rotate-12 border border-gray-600  rounded-lg sm:rounded-xl md:rounded-2xl">
                  <img
                    src={project.phoneImage}
                    alt="phone"
                    className="w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl  border-4 border-gray-500 dark:border-gray-400  "
                  />
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full grid sm:grid-cols-2   p-10  gap-10"
            >
              <div className="flex flex-row justify-center items-center gap-5">
                <div className="w-1/6 sm:w-1/4 flex flex-col overflow-hidden justify-center items-center border border-gray-600 -rotate-12 rounded-lg sm:rounded-xl md:rounded-2xl">
                  <img
                    src={project.phoneImage1}
                    alt="phone1"
                    className="   w-full h-full  justify-self-center border-4 border-gray-500 dark:border-gray-400  
                  rounded-lg sm:rounded-xl md:rounded-2xl"
                  />
                </div>
                <div className="w-1/6 sm:w-1/4 flex flex-col overflow-hidden justify-center items-center border border-gray-600 rotate-12 rounded-lg sm:rounded-xl md:rounded-2xl">
                  <img
                    src={project.phoneImage2}
                    alt="phone2"
                    className="  w-full h-full justify-self-center border-4 border-gray-500  dark:border-gray-400  
                  rounded-lg sm:rounded-xl md:rounded-2xl"
                  />
                </div>
              </div>

              <div className=" flex flex-col gap-5 justify-self-center p-5 rounded-xl bg-white shadow-lg  shadow-slate-300 dark:bg-slate-800 dark:shadow-none">
                {project.api && (
                  <div>
                    <h5 className=" text-indigo-700 dark:text-indigo-400 text-base md:text-lg">
                      <b>Resources:</b>
                    </h5>

                    <p>
                      <span>{project.api}</span>
                    </p>
                  </div>
                )}
                <div>
                  <h5 className="mb-3 text-indigo-700 dark:text-indigo-400 text-base md:text-lg">
                    <b>Tech Stack:</b>{" "}
                  </h5>
                  <div className="flex flex-row flex-wrap gap-1 text-sm md:text-sm font-semibold">
                    {project.skills.split(",").map((str, i) => (
                      <span className="  border border-cyan-600 dark:border-cyan-400  bg-cyan-100 dark:bg-transparent font-semibold me-3 py-2 px-3 flex justify-center text-cyan-700 dark:text-cyan-300 rounded-lg items-center gap-2">
                        {Icons.get(str.trim())} {str.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className=" text-indigo-700 dark:text-indigo-400">
                    <b>Source Code:</b>{" "}
                  </h5>
                  <p>{project.github}</p>
                </div>
              </div>
            </motion.section>
          </article>
        </section>
      ) : (
        <> </>
      )}
    </>
  );
}
