import {
  Code,
  Layout,
  LayoutDashboard,
  MonitorSmartphone,
  Rocket,
  TrendingUp,
  UploadCloud,
  Wrench,
} from "lucide-react";
import { FaServicestack } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import {
  MdDesignServices,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Custom Website Development",
      desc: "Fully tailored websites built from scratch — responsive, fast, and optimized for all devices.",
      icon: <Layout className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Frontend Development",
      desc: "Pixel-perfect, accessible UIs built with React, Bootstrap and Tailwind CSS — optimized for performance, usability, and cross-device compatibility.",
      icon: <MonitorSmartphone className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Full-Stack Web Applications",
      desc: "End-to-end web apps using modern stacks (React, Node.js, MongoDB) — scalable, secure, and built to solve real business problems.",
      icon: <Code className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Landing Pages That Convert",
      desc: "Conversion-focused landing pages tailored for product launches, lead generation, and marketing campaigns — fast, engaging, and effective.",
      icon: <Rocket className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Performance & SEO Optimization",
      desc: "Improve speed, Core Web Vitals, and SEO rankings with code audits, lazy loading, and best-in-class web practices.",
      icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Deployment & Hosting Support",
      desc: "Launch-ready deployment on Render, Vercel, Netlify, AWS, or custom servers",
      icon: <UploadCloud className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Website Maintenance & Support",
      desc: "Ongoing support for updates, bug fixes, and new features — so your site stays fast, secure, and up-to-date.",
      icon: <Wrench className="w-6 h-6 text-indigo-500" />,
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="services"
      className="services min-h-screen scroll-mt-32 p-10 flex flex-col gap-5 bg-indigo-100 dark:bg-inherit"
    >
      <h2 className="inline-flex uppercase font-header  mb-6 text-2xl sm:text-3xl md:text-4xl text-slate-800 dark:text-slate-100 font-extrabold ">
        <MdOutlineMiscellaneousServices className="text-indigo-500 dark:text-indigo-400 me-2" />
        Services
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, i) => (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            key={i}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl   shadow-lg  shadow-slate-300 hover:shadow-slate-500/30  dark:[box-shadow:2px_2px_25px_rgba(2,6,23,0.5)]  transition dark:hover:[box-shadow:0_0_25px_#99f6e4]"
          >
            <div className="flex flex-col items-center gap-3 mb-2 ">
              {service.icon}
              <h4 className="font-header   text-base md:text-xl  font-semibold text-cyan-600 dark:text-cyan-400">
                {service.title}
              </h4>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 text-center mt-5">
              {service.desc}
            </p>
          </motion.section>
        ))}

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="text-sm sm:text-base inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full transition"
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </motion.section>
  );
}
