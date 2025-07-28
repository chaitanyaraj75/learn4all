
import React, { useState, useEffect } from "react";
import { FaBook, FaFlask, FaGlobe, FaBrain, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import VideoSection from "../component/VideoSection";
import Navbar from "../component/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
// import Typed from "react-typed";
import "./home.css";

const Home = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const features = [
    { text: "Free Education", icon: <FaBook size={24} /> },
    { text: "Visual Learning", icon: <FaFlask size={24} /> },
    { text: "Accessible Anywhere", icon: <FaGlobe size={24} /> },
    { text: "Subject-Wise Resources", icon: <FaBrain size={24} /> },
  ];

  const testimonials = [
    {
      name: "Aman Verma",
      feedback:
        "This platform helped me revise science basics in a fun way. Highly recommended for kids!",
    },
    {
      name: "Neha Gupta",
      feedback:
        "Very easy to understand. Visual lessons made learning enjoyable and engaging.",
    },
    {
      name: "Ravi Singh",
      feedback:
        "This site is really helpful. Loved the course structure and ease of access!",
    },
  ];

  const courses = [
    { title: "Math for Beginners", subject: "Math", level: "Class 6" },
    { title: "Introduction to Science", subject: "Science", level: "Class 6" },
    { title: "World Geography", subject: "Social Science", level: "Class 7" },
  ];

  // const quoteEnglish =
  //   "Education is the most powerful weapon you can use to change the world.";
  // const quoteHindi =
  //   "शिक्षा सबसे शक्तिशाली हथियार है जिसका उपयोग आप दुनिया को बदलने के लिए कर सकते हैं।";

  const heroImages = [
    "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    "https://cdn-icons-png.flaticon.com/512/3035/3035983.png",
  ];

  return (
    <div className="font-sans text-gray-900 dark:text-white bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10">
        <motion.div
          className="max-w-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <h2 className="text-4xl font-bold mb-4">
            <Typed
              key={isDarkMode ? "dark" : "light"} // forces re-render
              strings={["Learn Without Limits", "Explore • Engage • Excel"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2> */}
          {/* <p className="text-lg italic text-green-600 mb-1">{quoteEnglish}</p>
          <p className="text-md italic text-green-500 mb-6">{quoteHindi}</p> */}

          <div className="grid grid-cols-2 gap-6 mt-10">
            {features.map((feature, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="text-green-600 mb-2">{feature.icon}</div>
                <p className="text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 w-full max-w-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="rounded-xl shadow-lg"
          >
            {heroImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Hero ${idx}`}
                  className="w-full h-64 object-contain rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Courses */}
      <section className="px-6 py-10">
        <h3 className="text-4xl font-bold mb-6 text-left">Top Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 p-4 shadow rounded-xl hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold">{course.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {course.subject}
              </p>
              <p className="text-sm text-green-600 font-medium mt-1">
                {course.level}
              </p>
              <button className="mt-4 text-sm px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-600">
                Enroll
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="px-6 py-10 bg-gray-200 dark:bg-gray-900">
        <h3 className="text-2xl font-bold mb-6 text-center">
          What Our Learners Say
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-yellow-500 flex mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm mb-2 italic">"{t.feedback}"</p>
              <p className="font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-10 text-center bg-white dark:bg-gray-900">
        <h3 className="text-3xl font-bold mb-4">📬 Contact With Us</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Have questions or want updates? Drop us a message or subscribe to our
          newsletter.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white px-6 py-6 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h5 className="font-bold mb-2">Quick Links</h5>
            <p>Home</p>
            <p>Courses</p>
            <p>Contact</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h5 className="font-bold mb-2">Contact</h5>
            <p>info@learnall.com</p>
            <p>+91 12345 67890</p>
          </div>
          <div className="text-3xl font-bold mt-4 md:mt-0">Learn4All</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
// when i run no response on web browser
