import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  /*const [objective, setObjective] = useState("");
  const [points, setPoints] = useState([]);*/

  const [companies, setCompanies] = useState([]);

  /*const skills1 = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "MongoDB"],
    Tools: ["Git", "VS Code", "Figma"],
  };*/
  const categoryColors = {
    1: "cyan",
    2: "indigo",
  };
  useEffect(() => {
    /*axios.get("./files/objective.txt").then((response) => {
      const lines = response.data.split(/\r?\n/);
      setPoints(lines);
      
    });*/
    axios.get("./files/experience.txt").then((response) => {
      const comps = response.data.split(/\r\n\r\n\r\n\r\n/);
      setCompanies(comps);
      //setObjective(response.data);
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-32 bg-white dark:bg-slate-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" px-10 pb-5 pt-10 flex flex-col"
      >
        <h2 className="mb-6 font-header uppercase  text-2xl sm:text-3xl md:text-4xl text-slate-800 dark:text-slate-100 font-extrabold inline-flex items-center">
          <User className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
          &nbsp;About
        </h2>

        <p className=" text-slate-700 dark:text-slate-300 mb-5 text-sm sm:text-base leading-relaxed">
          I’m a freelance Web Developer and former Full-Stack Software Engineer
          with 18+ years of experience designing and building scalable,
          user-friendly digital experiences. I specialize in creating fast,
          responsive, and beautifully designed websites and web apps using
          React, Tailwind CSS, JavaScript, and Node.js. With a strong foundation
          in backend systems, cloud deployment, and API integration, I bring
          both technical precision and creative flexibility to every project.
          Whether you need a polished portfolio, a modern landing page, or a
          full-stack web application, I bring sharp problem-solving skills,
          clear communication, and an eye for detail to every project.
        </p>
        <p className=" text-slate-700 dark:text-slate-300 mb-5 text-sm sm:text-base leading-relaxed">
          Outside of coding and design, you’ll find me painting, exploring UI
          trends, or experimenting with creative ways to bring tech and art
          together.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=""
      >
        <div className="px-10 py-7 bg-indigo-100 dark:bg-inherit">
          <h3 className="font-header   text-xl md:text-3xl  mb-7 text-indigo-600 dark:text-indigo-400 font-bold ">
            Experience
          </h3>

          <ul className="list-none flex flex-col  gap-y-5   my-3 ">
            <li className="  shadow-lg  shadow-slate-300 hover:shadow-slate-500/30  dark:[box-shadow:2px_2px_25px_rgba(2,6,23,0.5)] rounded-2xl p-10 w-full  bg-white dark:bg-slate-800">
              <h4 className=" font-header  text-indigo-700 dark:text-indigo-400 font-bold text-base md:text-xl">
                Full-Stack Web Developer & Engineer
              </h4>
              <h5 className="text-xs sm:text-sm leading-relaxed text-cyan-600 dark:text-cyan-300 font-semibold">
                Customer Care Inc. (CCI) &nbsp;&#8226;&nbsp; February 2006 -
                February 2024
              </h5>

              <ul className="my-3 text-xs md:text-sm leading-relaxed  list-disc px-5 text-slate-800 dark:text-slate-300">
                <li>
                  Designed, built and maintained full-stack web applications
                  independently and in small agile teams using{" "}
                  <strong>
                    React, Node.js, Java Spring Boot, Golang and Oracle
                  </strong>{" "}
                  often working independently or in small agile teams.
                </li>
                <li>
                  Delivered web portals and admin tools for major AT&T platforms
                  (WiFi, U-verse, Call Center, STEM), enhancing user experience
                  and operational efficiency.
                </li>
                <li>
                  Built and integrated <strong>RESTful APIs</strong> to connect
                  services, streamline data flow, and support real-time features
                  using
                  <strong> Spring Boot, Kafka, Python, and Postgres</strong>.
                </li>
                <li>
                  Led UI development using{" "}
                  <strong>HTML5, CSS, React, Bootstrap, JQuery</strong>,
                  ensuring mobile responsiveness and accessibility.
                </li>
                <li>
                  Managed end-to-end deployment with{" "}
                  <strong>AWS, Docker, and Kubernetes</strong>, including
                  version control using <strong>GitHub</strong>.
                </li>
              </ul>
            </li>
            <li className=" rounded-2xl shadow-lg shadow-slate-300 hover:shadow-slate-500/30 dark:[box-shadow:2px_2px_25px_rgba(2,6,23,0.5)] p-10 w-full  bg-white  dark:bg-slate-800 ">
              <h4 className="font-header  text-indigo-700  dark:text-indigo-400 font-bold text-base md:text-xl">
                System Analyst (Early Career)
              </h4>
              <h5 className="text-xs sm:text-sm leading-relaxed text-cyan-600 dark:text-cyan-300 font-semibold">
                Tata Consultancy Services &nbsp;&#8226;&nbsp; March 1996 – March
                2001
              </h5>
              <ul className="my-3 text-xs md:text-sm leading-relaxed list-disc px-5 text-slate-800 dark:text-slate-300">
                <li>
                  Supported enterprise application development for clients such
                  as GE Capital, ABSA, and Credit Suisse, focusing on business
                  logic and backend integration.
                </li>
                <li>
                  Contributed to software architecture and systems analysis for
                  large-scale financial systems.
                </li>
              </ul>
            </li>
          </ul>
          {/*<p className="mt-3 text-sm italic text-slate-700 dark:text-slate-400">
            My experience building full-stack applications in enterprise
            settings now empowers me to deliver fast, secure, and user-focused
            web solutions as a freelance developer.
          </p>*/}
        </div>
      </motion.div>
    </section>
  );
}
