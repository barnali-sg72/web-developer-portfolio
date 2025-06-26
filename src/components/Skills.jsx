import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "./utils";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("./files/skills.txt").then((response) => {
      let skls = [];
      const lines = response.data.split(/\r?\n/);
      lines.map((line) => {
        const elems = line.split(/\:/);
        const cat = elems[0];
        const sks = elems[1].split(",");
        let list = [];
        console.log(sks);
        sks.forEach((element) => {
          list.push({ icon: Icons.get(element.trim()), text: element.trim() });
        });
        console.log(list);
        skls.push({
          category: cat,
          list: list,
        });
      });
      setSkills(skls);
      //setObjective(response.data);
    });
  }, []);
  const isEven = (number) => {
    return number % 2 === 0;
  };
  const getCategoryColors = (ind) => {
    if (isEven(ind)) {
      return "text-cyan-700 dark:text-cyan-300 ";
    } else {
      return "text-indigo-700 dark:text-indigo-400 ";
    }
  };

  const getSkillColors = (ind) => {
    if (isEven(ind)) {
      return "bg-cyan-100 text-cyan-700 dark:text-cyan-300 dark:border dark:border-cyan-300";
    } else {
      return "bg-indigo-100 text-indigo-700 dark:text-indigo-400 dark:border dark:border-indigo-400";
    }
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen scroll-mt-32  p-10  dark:bg-slate-900 flex flex-col"
    >
      <h2 className="inline-flex gap-3 items-center mb-6 font-header font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl  text-slate-800 dark:text-slate-100  mt-0">
        <svg
          width="54"
          height="48"
          viewBox="0 0 64 48"
          fill="none"
          aria-label="Code brackets in browser window"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="8"
            width="56"
            height="32"
            rx="4"
            fill="inherit"
            stroke="#6366f1"
            stroke-width="2"
          />

          <rect x="4" y="8" width="56" height="8" fill="#6366f1" />

          <circle cx="12" cy="12" r="1.5" fill="#818CF8" />
          <circle cx="18" cy="12" r="1.5" fill="#A5B4FC" />
          <circle cx="24" cy="12" r="1.5" fill="#C7D2FE" />

          <path
            d="M28 26l-5 4 5 4"
            stroke="#6366f1"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36 34l5-4-5-4"
            stroke="#6366f1"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        {skills.map((p, i) => {
          const categoryColor = getCategoryColors(i);
          const skillColor = getSkillColors(i);
          return (
            <div
              key={p.category}
              className="mb-6 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-lg shadow-slate-300 hover:shadow-slate-500/30  dark:[box-shadow:0px_2px_25px_rgba(2,6,23,0.5)] transition dark:hover:[box-shadow:0_0_25px_#99f6e4]"
            >
              <h5
                className={`text-base md:text-lg   font-semibold ${categoryColor} mb-2`}
              >
                {p.category}
              </h5>
              <div className=" flex flex-wrap gap-3 text-sm md:text-sm font-semibold">
                {p.list.map((skill, idx) => (
                  <div
                    className={`flex gap-2 items-center ${skillColor} dark:bg-transparent  px-4 py-2 rounded-lg`}
                  >
                    {skill.icon}
                    <span key={idx} className="">
                      {skill.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
