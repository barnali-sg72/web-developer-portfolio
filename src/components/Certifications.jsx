import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { PiCertificateFill } from "react-icons/pi";

export default function Certifications() {
  const certifications = [
    {
      title: "Meta Front-End Developer Certificate",
      provider: "Meta",
      platform: "Coursera",
      date: "June 25, 2024",
      image: "/images/meta-certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/NW286MTQ3GEU",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      provider: "IBM",
      platform: "Coursera",
      date: "August 7, 2024",
      image: "/images/express.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/Y9PPJQX2JOVX",
    },
    {
      title: "Introduction to MongoDB",
      provider: "MongoDB Inc",
      platform: "Coursera",
      date: "July 23, 2024",
      image: "/images/mongodb.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/96ETGZ6XRRH2",
    },
    {
      title: "Programming in Python",
      provider: "Meta",
      platform: "Coursera",
      date: "June 25, 2024",
      image: "/images/python.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/CMFYWUBGY82P",
    },
    {
      title: "AWS Cloud Technical Essentials",
      provider: "AWS",
      platform: "Coursera",
      date: "July 9, 2024",
      image: "/images/aws-cloud-essentials.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/EVR6EQ4KAXL3",
    },
    {
      title: "Google AI Essentials",
      provider: "Google",
      platform: "Coursera",
      date: "August 17, 2024",
      image: "/images/ai-essentials.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/V5CF89U5B3K5",
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen scroll-mt-32 text-slate-700 p-10   bg-indigo-100 dark:bg-inherit"
    >
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className=" mx-auto">
          <h2 className="inline-flex font-header  uppercase mb-6  text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-700 dark:text-slate-100 text-center md:text-start">
            <PiCertificateFill className="text-indigo-500 dark:text-indigo-400 me-2" />
            Certifications
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className="flex flex-col items-center p-6 bg-[radial-gradient(#d1f8fd,white_80%)] dark:bg-gradient-to-b dark:from-indigo-800 dark:via-cyan-800 dark:to-slate-800 shadow-lg  shadow-slate-300  dark:[box-shadow:2px_2px_25px_rgba(2,6,23,0.5)] rounded-2xl  "
              >
                <BadgeCheck className="w-10 h-10 text-cyan-500 dark:text-cyan-400" />
                <div className="flex items-center gap-3 mb-2 text-indigo-600 dark:text-indigo-300">
                  <h3 className="inline-flex text-lg font-semibold text-center items-center justify-center">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-2">
                  {cert.provider} &middot; {cert.platform} &middot; {cert.date}
                </p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    loading="lazy"
                    className="w-3/4 max-w-md mx-auto rounded-lg  border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-shadow"
                  />
                </a>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  View Certificate →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}
