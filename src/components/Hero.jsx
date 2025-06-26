import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AppView } from "../App";
export default function Hero() {
  const navigate = useNavigate();
  const screenHeight = AppView === "Multi Page" ? "min-h-screen" : "";
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="hero"
      className={`${screenHeight} scroll-mt-32 flex items-center flex-grow bg-[linear-gradient(315deg,rgba(72,114,249,0.9),rgba(168,188,248,0.9),rgba(215,223,249,0.9),rgba(211,252,255,0.9),rgba(155,247,253,0.9),rgba(0,238,255,0.9)),url('../assets/images/icon-bg5.png')] 
        md:bg-[linear-gradient(315deg,rgba(72,114,249,0.9),rgba(168,188,248,0.9),rgba(215,223,249,0.9),rgba(211,252,255,0.9),rgba(155,247,253,0.9),rgba(0,238,255,0.9)),url('../assets/images/icon-bg2.png')] 
        lg:bg-[linear-gradient(315deg,rgba(72,114,249,0.9),rgba(168,188,248,0.9),rgba(215,223,249,0.9),rgba(211,252,255,0.9),rgba(155,247,253,0.9),rgba(0,238,255,0.9)),url('../assets/images/icon-bg3.png')] 
        dark:bg-[linear-gradient(315deg,rgba(68,101,211,0.8),rgba(2,10,134,0.8),rgba(1,3,49,0.8),rgba(2,51,66,0.8),rgba(10,112,143,0.8),rgba(0,220,236,0.8)),url('../assets/images/icon-bg6.png')]
        md:dark:bg-[linear-gradient(315deg,rgba(68,101,211,0.8),rgba(2,10,134,0.8),rgba(1,3,49,0.8),rgba(2,51,66,0.8),rgba(10,112,143,0.8),rgba(0,220,236,0.8)),url('../assets/images/icon-bg1.png')]
        lg:dark:bg-[linear-gradient(315deg,rgba(68,101,211,0.8),rgba(2,10,134,0.8),rgba(1,3,49,0.8),rgba(2,51,66,0.8),rgba(10,112,143,0.8),rgba(0,220,236,0.8)),url('../assets/images/icon-bg4.png')] bg-center bg-cover bg-no-repeat`}
    >
      {/*<section
      className="hero shadow-[inset_10px_10px_60px_#c7d2fe] dark:shadow-none text-black p-5 md:p-10  bg-[radial-gradient(ellipse_at_center,transparent_50%,#cffafe,#c7d2fe)]   dark:bg-[linear-gradient(225deg,#00658f,transparent_20%,transparent_80%,#3730a3),linear-gradient(135deg,#00658f,transparent_20%,transparent_80%,#3730a3),linear-gradient(to_bottom,#00658f,transparent_10%,transparent_90%,#3730a3)]
   max-w-6xl mx-auto flex flex-col items-center"
    >
     dark:bg-slate-950 dark:bg-[linear-gradient(135deg,#a5f3fc,#0e7490,transparent_40%),linear-gradient(225deg,#a5b4fc,#4338ca,transparent_40%)]
    */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-10 md:p-16 h-full justify-center grow text-black flex flex-col items-center gap-5 md:gap-5"
      >
        {/*<div className="flex justify-center w-4/5 md:w-1/2 mb-5">
          <img
            src={avatar}
            alt="Developer illustration"
            className="w-1/3 md:w-1/5 h-auto object-fill "
          />
        </div>*/}
        <h3 className="font-header text-center text-2xl  md:text-3xl text-slate-600 dark:text-slate-100 my-2 font-extrabold">
          {" "}
          Hi, I'm
        </h3>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-header  font-extrabold  text-shadow-dark dark:text-shadow-dark
                text-4xl sm:text-5xl md:text-6xl  text-indigo-500 dark:text-indigo-400 leading-tight mb-6"
        >
          Barnali Sengupta
        </motion.h1>
        <h3 className="font-header text-center text-2xl md:text-3xl text-slate-600 dark:text-slate-100 my-2 font-extrabold">
          {" "}
          Web Developer / Full-Stack Engineer
        </h3>
        <p className="text-slate-800 dark:text-slate-300 text-base md:text-lg font-semibold">
          I build fast, modern websites and web apps with React, Tailwind CSS,
          and Node.js. Let’s bring your ideas to life.
        </p>
        <div className="flex  justify-center md:justify-start gap-4">
          <button
            type="button"
            aria-label="Contact Me"
            onClick={() => navigate("/contact")}
            className="px-6  h-10 md:h-12 align-middle bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-semibold transition"
          >
            Hire Me
          </button>
          <button
            type="button"
            aria-label="View Projects"
            onClick={() => {
              navigate("/projects");
              navigate(0);
            }}
            className="px-6 h-10 md:h-12 align-middle border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600  hover:text-white rounded-full font-semibold transition"
          >
            View Work
          </button>
        </div>

        {/* Optional Avatar/Illustration */}
        {/*<div className="flex-1 flex justify-center w-4/5 md:w-1/2">
          <img
            src={avatar}
            alt="Developer illustration"
            className="w-[100%] h-auto object-fill "
          />
        </div>*/}
      </motion.div>
    </motion.section>
  );
}
