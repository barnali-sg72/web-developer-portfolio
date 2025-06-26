import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { PiMailboxBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();
  const [status, setStatus] = useState("");

  const context = useContext(AppContext);

  useEffect(() => {
    context.setSelectedMenu("Contact");
    localStorage.setItem("selectedMenu", "Contact");
  }, []);

  const onSubmit = async (data) => {
    // Check honeypot field
    if (data._gotcha) return;
    console.log("Submitted Data:", data);
    //await fetch("http://localhost:5000/api/contact", {
    try {
      const response = await fetch("  https://formspree.io/f/mwpbnpyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        reset();
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Please try later.");
    }
    // Simulate submission delay
    //await new Promise((res) => setTimeout(res, 1000));
    //reset(); // Reset form after submission
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="contact"
      className="min-h-screen scroll-mt-32  text-slate-700 p-10 dark:bg-slate-900  "
    >
      <div className=" mx-auto">
        <h2 className="inline-flex font-header  uppercase mb-6  text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-700 dark:text-slate-100 text-center md:text-start">
          <PiMailboxBold className="text-indigo-500 dark:text-indigo-400 me-2" />{" "}
          Contact Me
        </h2>
      </div>
      <div className="flex flex-col ">
        <p className="text-center md:text-start text-slate-700 dark:text-slate-300 mb-10 text-base sm:text-lg">
          Have a project in mind or just want to say hi? Fill out the form below
          or send me an email — I’ll get back to you as soon as I can.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-sm sm:text-base  rounded-2xl  bg-white dark:bg-slate-800 p-10 shadow-lg  shadow-slate-300 dark:[box-shadow:2px_2px_25px_rgba(2,6,23,0.5)]">
          {/* Contact Info */}
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <div className="flex flex-col items-center md:items-start">
              <MdEmail className="text-cyan-500  w-6 h-6" />
              <h3 className="font-semibold text-sm sm:text-base text-indigo-500 dark:text-indigo-400">
                Email
              </h3>
              <p>barnali.sengupta94@gmail.com</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <FaLinkedin className="text-cyan-500 w-6 h-6" />
              <h3 className="font-semibold text-sm sm:text-base  text-indigo-500 dark:text-indigo-400">
                LinkedIn
              </h3>
              <p>linkedin.com/in/barnalisengupta12</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-indigo-100 dark:bg-slate-700 p-6 shadow-lg  shadow-slate-300 dark:[box-shadow:2px_2px_25px_rgba(2,6,23,0.5)]">
            {status && (
              <p className="mb-4 text-indigo-600 dark:text-indigo-400 text-center">
                {status}
              </p>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4  text-slate-700 dark:text-slate-300"
            >
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
                {...register("_gotcha")}
              />
              <div>
                <label className="block  font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-gray-300 bg-white text-slate-700 rounded-lg p-2"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block  font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full border border-gray-300 bg-white text-slate-700 rounded-lg p-2"
                  placeholder="you@example.com"
                />

                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block  font-medium">Message</label>
                <textarea
                  name="message"
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full border border-gray-300 bg-white text-slate-700 rounded-lg p-2"
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <input
                type="button"
                className="ms-3 px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600  hover:text-white rounded-full font-semibold transition"
                onClick={reset}
                value="Cancel"
              />
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
